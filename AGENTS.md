# AGENTS.md

## Additional Context Found In @content-notes

## Project

This repository contains the website for a SYS course / BRAID educational resource on AI, society, neuromorphic computing, and anticipatory governance.

The site should support two related but distinct purposes:

1. A semester-long SYS course about AI as a technical, social, political, and environmental system.
2. A BRAID case-study / resource hub focused on neuromorphic hardware-level anomaly detection and its ethical, legal, and societal implications.

## Design principle

Do not treat this as a generic AI ethics course site.

The central design idea is:

> Students learn AI ethics, ELSI, and anticipatory governance through hands-on labs that make technical systems concrete.

The website should help users move between:

- technical mechanisms
- social and ethical implications
- governance questions
- course assignments
- BRAID-specific resources

## Audience

Primary audience:

- Undergraduate students in a SYS course

Secondary audiences:

- Instructors
- BRAID project stakeholders
- Non-specialists interested in neuromorphic AI governance
- Undergraduate researchers helping maintain the materials

Assume readers are smart but may not have deep technical background.

## Tone and style

Use clear, accessible language.
Avoid hype.
Avoid unnecessary jargon.
Do not oversimplify technical mechanisms.
When technical terms are necessary, define them plainly.
Prioritize ethical, legal, and societal implications.
Connect technical features to downstream governance questions.

## Core course themes

The course explores:

- AI as a technical and social system
- objectivity and neutrality
- classification and categories
- data, representation, and institutional bias
- technological solutionism
- thresholds, errors, and responsibility
- prediction, history, and feedback loops
- opacity, explainability, and contestability
- surveillance and datafication
- anomaly detection and “normal”
- edge AI, privacy, and accountability
- ideology, anthropomorphism, aliveness, and sentience claims
- dependency, cognitive offloading, and deskilling
- environmental impacts of AI
- centralization of power and political economy
- progress narratives and technological inevitability
- anticipatory governance of emerging technologies

## BRAID-specific focus

The BRAID case study focuses on cerebellum-inspired neuromorphic computing for efficient anomaly detection.

When working on BRAID pages, emphasize:

- hardware-level anomaly detection
- edge/on-device AI
- spiking neural networks
- timing and event-driven computation
- on-chip learning
- memory as physical state
- energy efficiency and environmental tradeoffs
- auditability, patching, traceability, and accountability
- risks of surveillance, misuse, power concentration, and weak explainability

## Frameworks to connect when relevant

When appropriate, map implications to:

- NIST AI Risk Management Framework
- EU AI Act
- IEEE Ethically Aligned Design
- OECD AI Principles

Do not force these frameworks into every page. Use them where they clarify governance.

## Site organization

Prefer organizing the site around:

1. Course home
2. Weekly schedule
3. Labs
4. Critical lenses
5. BRAID case study
6. Final project
7. Instructor / facilitator resources

Do not duplicate the same content across many pages. Link to reusable modules instead.

## Lab design pattern

Labs generally follow this structure:

1. Overview
2. Core learning goals
3. Key terms
4. Warm-up reflection
5. Scenario or setup
6. Hands-on activity
7. Technical translation
8. Social and ethical questions
9. Connection to BRAID, if relevant
10. Deliverable
11. Exit ticket

When editing labs, preserve this pedagogical pattern unless explicitly asked to change it.

## Course structure

The course meets twice per week for 100 minutes.

The preferred rhythm is:

- Meeting 1: critical lens / seminar / reading discussion
- Meeting 2: lab / applied activity / synthesis

The core SYS lab sequence is:

1. Classification Is Not Neutral
2. Training Data Shapes Learning
3. Features Are Value Choices
4. Thresholds and the Cost of Error
5. Prediction and Historical Data
6. Neural Networks and Opacity
7. Sensors Translate the World into Data
8. Anomaly Detection and Normal
9. Edge AI, Privacy, and Accountability
10. BRAID Anticipatory Governance Lab

The additional BRAID / hardware modules are: 11. Memory as Physical State 12. Von Neumann vs. Neuromorphic Architectures 13. Spikes, Timing, and Event-Driven Computation 14. Hardware Governance Lab 15. Energy and Computation 16. Learning, Memory, and Biological Metaphors 17. Electricity as Information 18. How Circuits Do Math

## Implementation guidance

Before making structural changes:

- inspect the existing site framework
- preserve frontmatter conventions
- preserve existing URL patterns unless asked otherwise
- avoid breaking existing links
- prefer reusable components or layouts for lab pages
- keep Markdown clean and readable

If the site uses a static site generator, follow the project’s conventions for frontmatter, collections, navigation, and page templates.

## Good Codex tasks for this repo

Examples of useful tasks:

- Create a lab index page organized by SYS core labs and BRAID extension labs.
- Create a weekly schedule page from the course plan.
- Add a critical lenses section.
- Create a BRAID case-study landing page.
- Add previous/next navigation for lab pages.
- Add an attribution footer to all lab pages.
- Create reusable components for learning goals, key terms, deliverables, and exit tickets.
- Create a final project page that draws from the lab sequence.
