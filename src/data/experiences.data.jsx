import Strong from "../components/fonts/Strong.style";
import Anchor from "../components/others/Anchor.style";

const experienceData = [
  {
    company: "Castles",
    title: "Engineer",
    period: "May 2023 — Present",
    description: [
      <>
        Work alongside with product manager, backend engineers, and QA teams to
        transform concepts into <Strong>functional digital interfaces</Strong>,
        following a one-month agile cycle.
      </>,
      <>
        Actively discuss requirements with the team, analyze user operate logic,
        and <Strong>resolve potential issues</Strong>, thereby improving
        development efficiency and product quality.
      </>,
      <>
        Write system design documents, recording requirement background, scope
        of changes, to ensure <Strong>clear design thinking</Strong> and
        facilitate future reference.
      </>,
      <>
        Follow team-defined development rules, utilize code review mechanisms,
        discuss code architecture with the team, and produce{" "}
        <Strong>optimized and maintainable code</Strong>.
      </>,
      <>
        Regularly check where the codebase can be improved, perform optimization
        and refactoring after development to enhance{" "}
        <Strong>product’s quality and stability</Strong>.
      </>,
    ],
  },
  {
    company: "QNAP",
    title: "Software Product Manager",
    period: "Jun 2021 — May 2023",
    description: [
      "Responsible for QVR-Human(crowd flow analysis), and QVR-Face(face recognition) software development.",
      "Collaborate with UI/UX, discussing feasibility with frontend and backend engineers, assisting QA in defining tests.",
      "Defining MVP, writing PRD, and providing marketing materials.",
    ],
  },
  {
    company: "Asus",
    title: "Software Project Manager",
    period: "Apr 2020 — Jun 2021",
    description: [
      "Lead the task force team to improve software stability.",
      "Collect issues with users from different countries, assist QA in duplicating issues, and assist engineers pinpoint bug.",
    ],
  },
  {
    company: "Asus",
    title: "Hardware Product Manager",
    period: "May 2015 — Apr 2020",
    description: [
      "Responsible for the ROG gaming keyboard and mouse develop.",
      <>
        Won the German{" "}
        <Anchor
          to="https://ifdesign.com/en/winner-ranking/project/cerberus-fortus/234226"
          target
          underline
        >
          iF Design Award
        </Anchor>{" "}
        in 2018.
      </>,
    ],
  },
];

export default experienceData;
