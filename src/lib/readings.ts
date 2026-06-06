import fs from 'fs';
import path from 'path';

const readingsPath = path.join(process.cwd(), 'content', 'config', 'readings.csv');

export interface Reading {
  id: string;
  title: string;
  url: string;
  authors: string;
  type: string;
  published: string;
  cards: string[];
  topics: number[];
  tags: string[];
  notes: string;
}

function parseCSVRow(line: string): string[] {
  const fields: string[] = [];
  let i = 0;

  while (i < line.length) {
    if (line[i] === '"') {
      i++;
      let field = '';
      while (i < line.length) {
        if (line[i] === '"' && line[i + 1] === '"') {
          field += '"';
          i += 2;
        } else if (line[i] === '"') {
          i++;
          break;
        } else {
          field += line[i++];
        }
      }
      fields.push(field);
      if (i < line.length && line[i] === ',') i++;
    } else {
      const end = line.indexOf(',', i);
      if (end === -1) {
        fields.push(line.slice(i));
        break;
      }
      fields.push(line.slice(i, end));
      i = end + 1;
    }
  }

  if (line.endsWith(',')) fields.push('');

  return fields;
}

function parsePipeList(value: string): string[] {
  return value ? value.split('|').map(s => s.trim()).filter(Boolean) : [];
}

let cache: Reading[] | null = null;

export function getAllReadings(): Reading[] {
  if (cache) return cache;

  const content = fs.readFileSync(readingsPath, 'utf8');
  const lines = content
    .split('\n')
    .map(l => l.replace(/\r$/, ''))
    .filter(l => l.trim());

  if (lines.length < 2) {
    cache = [];
    return cache;
  }

  const headers = parseCSVRow(lines[0]).map(h => h.trim());

  cache = lines
    .slice(1)
    .map(line => {
      const values = parseCSVRow(line);
      const row: Record<string, string> = Object.fromEntries(
        headers.map((h, i) => [h, (values[i] ?? '').trim()])
      );

      if (row.draft === 'true') return null;

      return {
        id: row.id,
        title: row.title,
        url: row.url,
        authors: row.authors ?? '',
        type: row.type ?? '',
        published: row.published ?? '',
        cards: parsePipeList(row.cards),
        topics: parsePipeList(row.topics)
          .map(Number)
          .filter(n => !isNaN(n)),
        tags: parsePipeList(row.tags),
        notes: row.notes ?? '',
      };
    })
    .filter((r): r is Reading => r !== null);

  return cache;
}

export function getReadingsForCard(cardNum: string): Reading[] {
  if (!cardNum) return [];
  return getAllReadings().filter(r => r.cards.includes(cardNum));
}

export function getReadingsForTopic(scheduledDay: number | undefined): Reading[] {
  if (scheduledDay == null) return [];
  return getAllReadings().filter(r => r.topics.includes(scheduledDay));
}
