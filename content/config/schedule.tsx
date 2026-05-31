import React from 'react';

export const baseTopics = [
  {
    id: 1,
    title: 'What Is Intelligence?',
    description: (
      <>
        <ul className="list-spaced">
          <li>
            <strong>Recognition patterns:</strong> AI systems are socio-technical systems; classification is not
            neutral; data is produced, not found.
          </li>
          <li>
            <strong>Unit focus:</strong> Students begin by asking what counts as intelligence, who gets to define it,
            and how measurement, categorization, and data production shape public life.
          </li>
          <li>
            <strong>BRAID / ELSI arc:</strong> This unit introduces BRAID as a socio-technical system and establishes
            that categories such as normal, signal, noise, and anomaly have ethical and governance consequences.
          </li>
        </ul>
      </>
    ),
    meetings: [
      {
        date: 'Tue, Aug 18',
        topic: 'Course launch: human + machine intelligence as public issue',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> Course launch and human + machine intelligence as a public issue.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>AI systems are socio-technical systems.</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> AI is not just software; it is infrastructure, labor,
              hardware, institutions, and governance.
            </p>
          </>
        ),
        activities: [
          { title: 'Course framing; “Is this AI?” activity' },
          {
            title: 'Career Module 1: Career quiz, values, coaching access',
            url: '/assignments/career-module01/',
            draft: 0,
          },
        ],
      },
      {
        date: 'Thu, Aug 20',
        topic: 'What counts as intelligence? Human, animal, machine, social, embodied',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> What counts as intelligence across human, animal, machine, social, and
              embodied forms.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>AI systems are socio-technical systems.</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> Map BRAID as a socio-technical system involving chip, lab,
              funder, user, regulator, and public.
            </p>
          </>
        ),
        activities: [{ title: 'Lab 0: Map an AI system' }],
      },
      {
        date: 'Tue, Aug 25',
        topic: 'Measurement, categories, and intelligence',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> Measurement, categories, and intelligence.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>Classification is not neutral.</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> “Normal,” “signal,” “noise,” and “anomaly” are categories
              with consequences.
            </p>
          </>
        ),
        activities: [{ title: 'Lab 1: Classification Is Not Neutral', url: '/assignments/lab01a/', draft: 0 }],
      },
      {
        date: 'Thu, Aug 27',
        topic: 'Objectivity, neutrality, and who gets defined',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> Objectivity, neutrality, and who gets defined.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>Classification is not neutral.</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> Who gets to define intelligence, normality, risk, or error?
            </p>
          </>
        ),
        activities: [
          { title: 'Discussion: case + theory' },
          {
            title: 'Career Module 2: Three possible lives + SMART goals',
            url: '/assignments/career-module02/',
            draft: 0,
          },
        ],
      },
      {
        date: 'Tue, Sep 1',
        topic: 'Human learning, memory, dreams, prediction, adaptation',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> Human learning, memory, dreams, prediction, and adaptation.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>Data is produced, not found.</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> A bridge into <em>The Dream Hotel</em> and the question of
              what gets lost when inner life becomes data.
            </p>
          </>
        ),
        activities: [{ title: 'Lab 2: Turning experience into data', url: '/assignments/lab02/', draft: 0 }],
      },
      {
        date: 'Thu, Sep 3',
        topic: 'Embodiment, interiority, and difficult-to-measure experience',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> Embodiment, interiority, and difficult-to-measure experience.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>Data is produced, not found.</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> A strong opening for <em>The Dream Hotel</em> and its
              treatment of intimate, difficult-to-measure experience.
            </p>
          </>
        ),
        activities: [
          { title: 'Discussion: case + theory' },
          {
            title: 'Career Module 4: Strengths, accomplishments, durable skills',
            url: '/assignments/career-module04/',
            draft: 0,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'How Do Machines Learn?',
    description: (
      <>
        <ul className="list-spaced">
          <li>
            <strong>Recognition patterns:</strong> Features are value choices; thresholds distribute harm; prediction
            imports the past.
          </li>
          <li>
            <strong>Unit focus:</strong> Students learn how models, data, scores, and thresholds operate while also
            asking how those choices encode institutional priorities and historical assumptions.
          </li>
          <li>
            <strong>BRAID / ELSI arc:</strong> This unit prepares students to see that technical choices in sensing,
            feature design, thresholds, and adaptation shape downstream governance questions.
          </li>
        </ul>
      </>
    ),
    meetings: [
      {
        date: 'Tue, Sep 8',
        topic: 'Data, rules, models, training, and inference',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> Data, rules, models, training, and inference.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>Features are value choices.</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> Sensor choices, features, and spike encodings shape what
              hardware can “see.”
            </p>
          </>
        ),
        activities: [{ title: 'Lab 3: Features Are Value Choices', url: '/assignments/lab03/', draft: 0 }],
      },
      {
        date: 'Thu, Sep 10',
        topic: 'Generative AI as one paradigm, not all AI',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> Generative AI as one paradigm, not all AI.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>Features are value choices.</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> Prevent overgeneralizing from LLMs to all AI, especially
              neuromorphic AI.
            </p>
          </>
        ),
        activities: [
          { title: 'Discussion: case + theory' },
          {
            title: 'Career Module 3: Life after college + salary negotiation',
            url: '/assignments/career-module03/',
            draft: 0,
          },
        ],
      },
      {
        date: 'Tue, Sep 15',
        topic: 'Supervised learning, scores, and decisions',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> Supervised learning, scores, and decisions.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>Thresholds distribute harm.</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> False positives and false negatives matter differently across
              use cases.
            </p>
          </>
        ),
        activities: [{ title: 'Lab 4: Thresholds and the Cost of Error', url: '/assignments/lab04/', draft: 0 }],
      },
      {
        date: 'Thu, Sep 17',
        topic: 'Error, responsibility, and decision thresholds',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> Error, responsibility, and decision thresholds.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>Thresholds distribute harm.</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> Connect thresholds to accountability, auditability, and
              oversight.
            </p>
          </>
        ),
        activities: [{ title: 'Discussion: case + theory' }],
      },
      {
        date: 'Tue, Sep 22',
        topic: 'Prediction and historical data',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> Prediction and historical data.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>Prediction imports the past.</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> Prior patterns become embedded in future anomaly judgments.
            </p>
          </>
        ),
        activities: [{ title: 'Lab 5: Prediction and Historical Data', url: '/assignments/lab05/', draft: 0 }],
      },
      {
        date: 'Thu, Sep 24',
        topic: 'Feedback loops and “neutral” prediction',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> Feedback loops and “neutral” prediction.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>Prediction imports the past.</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> Adaptive systems may learn from their own classifications.
            </p>
          </>
        ),
        activities: [
          { title: 'Discussion: case + theory' },
          {
            title: 'Career Module 5: Career storytelling + interview introductions',
            url: '/assignments/career-module05/',
            draft: 0,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Brain-Inspired Computing and Neuromorphic Systems',
    description: (
      <>
        <ul className="list-spaced">
          <li>
            <strong>Recognition patterns:</strong> Anthropomorphism and aliveness claims; opacity shifts authority; AI
            is material.
          </li>
          <li>
            <strong>Unit focus:</strong> Students build technical grounding in neuroscience metaphors, neural networks,
            spiking systems, timing, and neuromorphic architectures without collapsing those systems into myths of
            human-like intelligence.
          </li>
          <li>
            <strong>BRAID / ELSI arc:</strong> The unit prepares students to analyze how brain metaphors, material
            substrates, and hardware design choices affect public understanding, trust, and governance.
          </li>
        </ul>
      </>
    ),
    meetings: [
      {
        date: 'Tue, Sep 29',
        topic: 'Neuroscience primer: neurons, synapses, weights, plasticity',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> Neuroscience primer covering neurons, synapses, weights, and plasticity.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>Anthropomorphism and aliveness claims.</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> Ground biological inspiration before students critique neural
              networks.
            </p>
          </>
        ),
        activities: [{ title: 'Lab 6A: Biological Neurons vs Artificial Neurons', url: '/assignments/lab06/', draft: 0 }],
      },
      {
        date: 'Thu, Oct 1',
        topic: 'Neural networks, opacity, trust, contestability, dependency',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> Neural networks, opacity, trust, contestability, and dependency.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>Opacity shifts authority.</li>
              <li>AI can create dependency, cognitive offloading, and deskilling.</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> Brain metaphors can mislead, and opaque systems can encourage
              over-trust or deference.
            </p>
          </>
        ),
        activities: [
          { title: 'Discussion: case + theory' },
          { title: 'Interview story practice' },
        ],
      },
      {
        date: 'Tue, Oct 6',
        topic: 'Fall Break',
        description: 'No class.',
        holiday: true,
        activities: [{ title: 'No class' }],
      },
      {
        date: 'Thu, Oct 8',
        topic: 'Neuromorphic computing: SNNs, spikes, timing',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> Neuromorphic computing through SNNs, spikes, and timing.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>AI is material.</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> Introduce spikes, timing, event-driven computation, and the
              limits of biological analogy.
            </p>
          </>
        ),
        activities: [{ title: 'Lab 6B: Spiking / timing / simple SNN activity', url: '/assignments/lab13/', draft: 0 }],
      },
    ],
  },
  {
    id: 4,
    title: 'From Mechanism to Implications',
    description: (
      <>
        <ul className="list-spaced">
          <li>
            <strong>Recognition patterns:</strong> “Normal” is constructed; measurement becomes datafication;
            automation changes accountability; power can concentrate in infrastructure; AI is material.
          </li>
          <li>
            <strong>Unit focus:</strong> Students move from mechanism to consequence by connecting anomaly detection,
            sensing, edge AI, hardware, environmental claims, and institutional power to real governance questions.
          </li>
          <li>
            <strong>BRAID / ELSI arc:</strong> This is the core translational unit for turning neuromorphic mechanisms
            into questions about surveillance, accountability, vendor power, materials, and lifecycle harm.
          </li>
        </ul>
      </>
    ),
    meetings: [
      {
        date: 'Tue, Oct 13',
        topic: 'Unsupervised learning, clustering, anomaly detection',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> Unsupervised learning, clustering, and anomaly detection.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>“Normal” is constructed.</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> Core BRAID concept: anomaly detection requires a baseline of
              expected behavior.
            </p>
          </>
        ),
        activities: [{ title: 'Lab 7: Anomaly Detection and Normal', url: '/assignments/lab08/', draft: 0 }],
      },
      {
        date: 'Thu, Oct 15',
        topic: 'Normality, anomaly, surveillance',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> Normality, anomaly, and surveillance.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>“Normal” is constructed.</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> Misuse risk: anomaly detection can become surveillance or
              social control.
            </p>
          </>
        ),
        activities: [
          { title: 'Discussion: case + theory' },
          {
            title: 'Career Module 6: LinkedIn, networking, informational interviews',
            url: '/assignments/career-module06/',
            draft: 0,
          },
        ],
      },
      {
        date: 'Tue, Oct 20',
        topic: 'Sensors, edge AI, wearables, biosensing, cybersecurity',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> Sensors, edge AI, wearables, biosensing, and cybersecurity.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>Measurement becomes datafication.</li>
              <li>Automation changes accountability.</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> Edge or on-chip AI changes data flows, logging, oversight, and
              responsibility.
            </p>
          </>
        ),
        activities: [{ title: 'Lab 8: Edge AI, Privacy, and Accountability', url: '/assignments/lab09/', draft: 0 }],
      },
      {
        date: 'Thu, Oct 22',
        topic: 'Edge AI, cloud, chips, vendors, human judgment',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> Edge AI, cloud, chips, vendors, and human judgment.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>Power can concentrate in infrastructure.</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> Hardware, vendors, standards, and repair shape who can govern
              or contest systems.
            </p>
          </>
        ),
        activities: [
          { title: 'Discussion: case + theory' },
          { title: 'Informational interview prep' },
        ],
      },
      {
        date: 'Tue, Oct 27',
        topic: 'Hardware, memristors, energy, and material AI',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> Hardware, memristors, energy, and material AI.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>AI is material.</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> Memristors and memtransistors, on-chip learning, energy
              efficiency, and lifecycle impacts.
            </p>
          </>
        ),
        activities: [{ title: 'Lab 9: Neuromorphic Hardware and Material AI', url: '/assignments/lab12/', draft: 0 }],
      },
      {
        date: 'Thu, Oct 29',
        topic: 'BRAID neuromorphic anomaly detection',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> BRAID neuromorphic anomaly detection.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>Emerging technologies require anticipatory governance.</li>
              <li>AI is material.</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> Apply NIST, EU AI Act, IEEE, and OECD-style questions to
              BRAID.
            </p>
          </>
        ),
        activities: [
          { title: 'Discussion: case + governance frameworks' },
          {
            title: 'Career Module 7: Cultural capital, fit, boundaries',
            url: '/assignments/career-module07/',
            draft: 0,
          },
        ],
      },
      {
        date: 'Tue, Nov 3',
        topic: 'Explainability, adaptive hardware, and public understanding',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> Explainability, adaptive hardware, and public understanding.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>Opacity shifts authority.</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> Students translate a technical mechanism into public-facing
              language.
            </p>
          </>
        ),
        activities: [{ title: 'Project workshop: technical explainer' }],
      },
      {
        date: 'Thu, Nov 5',
        topic: 'Environmental claims, efficiency, lifecycle costs',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> Environmental claims, efficiency, and lifecycle costs.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>AI is material.</li>
              <li>Power can concentrate in infrastructure.</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> Efficiency claims must be weighed against materials,
              fabrication, e-waste, and scale.
            </p>
          </>
        ),
        activities: [
          { title: 'Discussion / project workshop' },
          { title: 'Professional boundaries / fit reflection' },
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Governing Uncertain Futures',
    description: (
      <>
        <ul className="list-spaced">
          <li>
            <strong>Recognition patterns:</strong> Emerging technologies require anticipatory governance; alternatives
            can be foreclosed; student-selected pattern.
          </li>
          <li>
            <strong>Unit focus:</strong> Students connect stakeholders, harms, benefits, history, alternatives, and
            governance frameworks in order to draft public-facing analyses and proposals.
          </li>
          <li>
            <strong>BRAID / ELSI arc:</strong> The central question becomes how to govern anomaly detection and other
            emerging AI systems before their assumptions, harms, and dependencies become locked in.
          </li>
        </ul>
      </>
    ),
    meetings: [
      {
        date: 'Tue, Nov 10',
        topic: 'Stakeholders, harms, benefits, governance',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> Stakeholders, harms, benefits, and governance.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>Student-selected pattern.</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> Build an ELSI risk memo around a neuromorphic or emerging AI
              use case.
            </p>
          </>
        ),
        activities: [{ title: 'Project workshop: stakeholder map + harm/benefit analysis' }],
      },
      {
        date: 'Thu, Nov 12',
        topic: 'Alternatives, refusal, repair, democratic governance',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> Alternatives, refusal, repair, and democratic governance.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>Alternatives can be foreclosed.</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> Ask when anomaly detection should be limited, redesigned,
              refused, or governed differently.
            </p>
          </>
        ),
        activities: [{ title: 'Discussion / project workshop' }],
      },
      {
        date: 'Tue, Nov 17',
        topic: 'University Senior Symposium',
        description: 'No class.',
        holiday: true,
        activities: [{ title: 'No class' }],
      },
      {
        date: 'Thu, Nov 19',
        topic: 'Governance frameworks: NIST, EU AI Act, OECD, IEEE',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> Governance frameworks including NIST, the EU AI Act, OECD, and IEEE.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>Emerging technologies require anticipatory governance.</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> Turn technical and ethical analysis into governance questions.
            </p>
          </>
        ),
        activities: [
          { title: 'Project conferences / studio work' },
          {
            title: 'Career Module 8: Career readiness synthesis presentation prep',
            url: '/assignments/career-module08/',
            draft: 0,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Public Communication and Final Synthesis',
    description: (
      <>
        <ul className="list-spaced">
          <li>
            <strong>Recognition patterns:</strong> Student-selected pattern; emerging technologies require
            anticipatory governance.
          </li>
          <li>
            <strong>Unit focus:</strong> Students revise public-facing work, practice peer feedback, and bring
            technical explanation into direct conversation with stakeholder analysis and governance reasoning.
          </li>
          <li>
            <strong>BRAID / ELSI arc:</strong> The culminating task is to connect mechanism, stakeholder concern, risk,
            and governance question in a form that is public-facing and usable.
          </li>
        </ul>
      </>
    ),
    meetings: [
      {
        date: 'Tue, Nov 24',
        topic: 'Draft presentations / peer review',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> Draft presentations and peer review.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>Student-selected pattern.</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> Review for technical accuracy, ELSI clarity, and public
              usefulness.
            </p>
          </>
        ),
        activities: [
          { title: 'Peer critique + revision' },
          { title: 'Career synthesis presentation draft' },
        ],
      },
      {
        date: 'Thu, Nov 26',
        topic: 'Thanksgiving Break',
        description: 'No class.',
        holiday: true,
        activities: [{ title: 'No class' }],
      },
      {
        date: 'Tue, Dec 1',
        topic: 'Last day of class: synthesis',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> Last day of class synthesis.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>Emerging technologies require anticipatory governance.</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> Technical mechanism to stakeholder concern to risk to
              governance question.
            </p>
          </>
        ),
        activities: [
          { title: 'Final synthesis workshop' },
          { title: 'Career readiness synthesis due / share-out' },
        ],
      },
      {
        date: 'Thu, Dec 3',
        topic: 'Optional support',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> Optional support.
            </p>
            <p>
              <strong>BRAID / ELSI connection:</strong> Optional final ELSI project support.
            </p>
          </>
        ),
        activities: [
          { title: 'Optional conferences or no class' },
          { title: 'Optional support' },
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'Final Exam / Presentations',
    description: (
      <>
        <ul className="list-spaced">
          <li>
            <strong>Recognition patterns:</strong> Student-selected pattern(s).
          </li>
          <li>
            <strong>Unit focus:</strong> Final presentations synthesize technical explanation, public communication,
            and governance analysis.
          </li>
        </ul>
      </>
    ),
    meetings: [
      {
        date: 'Final exam period',
        topic: 'Final presentations',
        description: (
          <>
            <p>
              <strong>Topic / focus:</strong> Final presentations.
            </p>
            <p>
              <strong>Recognition patterns:</strong>
            </p>
            <ul className="list-tight">
              <li>Student-selected pattern(s).</li>
            </ul>
            <p>
              <strong>BRAID / ELSI connection:</strong> Public-facing explainer plus ELSI risk analysis.
            </p>
          </>
        ),
        activities: [{ title: 'Final reflection' }],
      },
    ],
  },
];
