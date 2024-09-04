/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import "./styles/portfolio.css";
// import packOver1 from "../assets/taskBoard1.png";

const projects = [
  {
    id: 1,
    name: "PAC-Overflow",
    technology: "MERN1",
    image: "PacOver",
    gitHub: "https://github.com/asw-afk/PAC-Overflow",
    dUrl: "https://pac-overflow.onrender.com/",
  },
  {
    id: 5,
    name: "Smart Shop",
    technology: "Blazor,.Net, C#",
    image: "smartShop",
    gitHub: "https://github.com/ekhay-hit/SmartShop",
    dUrl: "https://github.com/ekhay-hit/SmartShop",
  },
  {
    id: 2,
    name: "Text Editor",
    technology: "MERN2",
    image: "textEditor",
    gitHub: "https://github.com/ekhay-hit/text_editor_pwa",
    dUrl: "https://text-editor-pwa-rrm4.onrender.com",
  },
  {
    id: 3,
    name: "Safer Travels",
    technology: "JS,CSS, API,",
    image: "weatherDashboard",
    gitHub: "https://github.com/MTKRD/Safer-Travels",
    dUrl: "https://mtkrd.github.io/Safer-Travels/",
  },
  {
    id: 4,
    name: "Task Board",
    technology: "JS,jQuery,CSS",
    image: "taskBoard1",
    gitHub: "https://github.com/ekhay-hit/Tasks-Board",
    dUrl: "https://ekhay-hit.github.io/Tasks-Board/",
  },
];

export default function Portfolio() {
  const myProjects = projects;
  console.log(myProjects);
  return <ProjectList projects={myProjects} />;
}

function ProjectList({ projects }) {
  console.log("I am in the porjectList");
  console.log(projects);
  const myProject = projects;
  return (
    <main className="projects-list">
      {myProject.map((project) => (
        <Project item={project} key={project.id} />
      ))}
    </main>
  );
}

function Project({ item }) {
  const gitHubRepo = item.gitHub;
  //state to control hiding information display on each project
  const [hide, setHide] = useState(false);
  //state to contol the image if loaded or not
  const [imageLoaded, setImageLoaded] = useState(false);

  // useRef to keep the image path whe it is loaded
  const bgImageRef = useRef(null);

  // function to change the setHide state when mouse hover or out of the project
  function handleMouse() {
    // set the state to the opposite of its value
    setHide((value) => !value);
  }

  // useEffect to import the path of the background
  useEffect(() => {
    // function to load image
    const loadImage = async () => {
      try {
        // import the image from the folder
        const imageModule = import(`../assets/${item.image}.png`);

        // assign it to bgImageRef.current
        bgImageRef.current = imageModule.default;

        // await till the image is loaded
        bgImageRef.current = (await imageModule).default;

        // change the state to true when the image loaded
        setImageLoaded(true);
        //catch if there is any error
      } catch {
        console.error("Failed to load the image");
      }
    };
    loadImage();
  }, [item.image]);

  return (
    <>
      <div
        style={{
          backgroundImage: imageLoaded ? `url(${bgImageRef.current})` : "none",
          backgroundSize: "cover",
        }}
        onMouseOver={handleMouse}
        onMouseOut={handleMouse}
        className="project-card"
      >
        {hide && (
          <>
            <m>
              <a href={item.dUrl} target="_blank">
                {item.name}
              </a>
            </m>
            <div className="gitHub">
              <GitHub gitHub={gitHubRepo} />
            </div>
            <h4>{item.technology}</h4>,
          </>
        )}
      </div>
    </>
  );
}

function GitHub({ gitHub }) {
  return (
    <div className="gitHub">
      <a href={gitHub} target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="currentColor"
          className="bi bi-github"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
        </svg>
      </a>
    </div>
  );
}
