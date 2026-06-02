import MarkdownContent from './MarkdownContent';
import HorizontalCardStrip, { type HorizontalCardStripItem } from './HorizontalCardStrip';

export type PatternComicStripItem = HorizontalCardStripItem;

interface PatternComicStripProps {
  intro?: string;
  items: PatternComicStripItem[];
}

export default function PatternComicStrip({ intro, items }: PatternComicStripProps) {
  if (items.length === 0) {
    return intro ? <MarkdownContent content={intro} /> : null;
  }

  return (
    <HorizontalCardStrip
      intro={intro}
      items={items}
      cardContentClassName="[&_blockquote]:mb-0 [&_blockquote]:mt-4 [&_img]:mb-4 [&_img]:aspect-4/3 [&_img]:w-full [&_img]:max-w-none [&_img]:rounded-xl [&_img]:object-cover"
    />
  );
}
