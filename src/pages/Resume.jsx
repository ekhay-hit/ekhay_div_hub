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
      <Skill frontEnd={frontEndSkills} />
      <Skill frontEnd={backEndSkills} />
    </main>
  );
}

function Skill({ frontEnd }) {
  const myFrontEnd = frontEnd;
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
