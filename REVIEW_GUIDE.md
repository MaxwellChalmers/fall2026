# Field Guide Review Guide

This document explains how to mark a card as verified and what to check for each card family.

## How to update a card's status

Open the card's markdown file and update the frontmatter:

```yaml
status: verified
status_reviewer: svw
status_date: 2026-06-15
status_notes:
```

Set `status` to one of: `verified`, `in-progress`, `unverified`.

Leave `status_notes` blank when verified, or add a brief note about what still needs work.

## To hide status banners

Open `content/config/course.json` and set the relevant flag to `false`:

```json
"statusBanners": {
  "fieldGuide": false,
  "topicsAndAssignments": false
}
```

- `fieldGuide` controls the banner at the top of field guide card pages (deployment patterns, STS concepts, ethical frameworks, technical explainers, examples)
- `topicsAndAssignments` controls the status widget at the bottom of the left nav sidebar on topic and assignment pages

Then rebuild and redeploy.

---

## Verification criteria by family

### AI Deployment Patterns

A card is **verified** when:

- [ ] The pattern describes how a system operates *on* people — their subjectivity, agency, or experience — not just what the technology does technically
- [ ] The "What To Notice" section gives a student something concrete to look for in a real deployed system
- [ ] The "Questions To Ask" are actionable, not rhetorical
- [ ] Cross-links to STS Concepts and Examples are present and correct

### STS Concepts

A card is **verified** when:

- [ ] The card explains a structural or theoretical reason *why* deployment patterns occur
- [ ] The content is descriptive, not normative (STS concepts are "is" not "ought")
- [ ] Key thinkers or sources are cited or referenced
- [ ] Cross-links to related Deployment Patterns are present and correct

### Ethical Frameworks

A card is **verified** when:

- [ ] The diagnostic question is sharp and applicable to AI systems specifically
- [ ] The "Tensions and Limits" section is present and honest about what the framework misses
- [ ] Key thinkers are named with accurate dates and works
- [ ] The framework is normative — it helps evaluate whether something is acceptable ("ought"), not just describe it

### Technical Explainers

A card is **verified** when:

- [ ] The technical explanation is accurate and accessible to a non-engineering senior student
- [ ] The "critical bridge" section connects the technical content to at least one Deployment Pattern card
- [ ] No significant technical errors or outdated claims

### Examples

A card is **verified** when:

- [ ] The factual account is accurate and sourced
- [ ] The source is reliable (peer-reviewed, major journalism, government document, or similar)
- [ ] The "What Happened" section is descriptive, not interpretive — interpretation lives on the linked recognition cards
- [ ] At least two Deployment Pattern cards are linked with accurate connection text
- [ ] The "Contested" section (if present) fairly represents disagreement without editorializing
