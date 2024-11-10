/* eslint-disable react/prop-types */
import "./styles/resume.css";

const frontEnd = {
  name: "Front end Skills",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "Web API",
    "Third party API",
    "React",
    "Responsive design",
    "Bootstrap",
  ],
};

const backEnd = {
  name: "Back end Skills",
  skills: [
    "APIs",
    "Node",
    "MongoDB, Mongoose",
    "MySQL, Sequileze",
    "Express",
    "GraphQL",
    "REST",
  ],
};
export default function Resume() {
  const frontEndSkills = frontEnd;
  const backEndSkills = backEnd;
  return (
    <main className="resume">
      <div className="download_resume">
        <ResumeDownload />
        <br></br>
        <ViewResume />
      </div>
      <div className="front_end">
        <Skill skills={frontEndSkills} />
      </div>
      <div className="back_end">
        <Skill skills={backEndSkills} />
      </div>
    </main>
  );
}

function Skill({ skills }) {
  const myFrontEnd = skills;
  return (
    <>
      <ul>
        <h2>{myFrontEnd.name}</h2>
        {myFrontEnd.skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </>
  );
}

function ResumeDownload() {
  const resumeUrl =
    "https://drive.google.com/uc?export=download&id=1H0a-bAP-_0PPOBDAGfyg5VUX2aTvmiKa";
  return (
    <a href={resumeUrl} target="_blank" download="Houssine_khay.pdf">
      ⬇️ Download my Resume
    </a>
  );
}

function ViewResume() {
  const resumeUrl =
    "https://drive.google.com/file/d/1H0a-bAP-_0PPOBDAGfyg5VUX2aTvmiKa/view?usp=drive_link ";
  return (
    <a href={resumeUrl} target="_blank">
      👁️‍🗨️ View my Resume
    </a>
  );
}
