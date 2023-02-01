import { useState } from "react";
import Lottie from "lottie-react";
import Sparkles from "/src/assets/animations/sparkles.json";
import ProjectData from "../components/ProjectData";
import Github from "../assets/images/icons/github2.svg";
import Link from "../assets/images/icons/link.svg";

export default function Projects() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Sparkles,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [projects, setProjects] = useState(ProjectData);

  const handleClick = (category) => {
    if (category === "all") {
      setProjects(ProjectData);
    }
    if (category !== "all") {
      const newList = ProjectData.filter((project) =>
        project.categories
          .toString()
          .toLowerCase()
          .includes(category.toLowerCase())
      );
      setProjects(newList);
    }
  };

  return (
    <>
      <section className="banner">
        <svg fill="rgba(1, 46, 245, 0.1)">
          <circle cx="140" cy="140" r="140" />
        </svg>
        <div className="title_container">
          <div className="title">
            {/*<img src="src/assets/images/icons/sparkle.svg" alt="sparkle" />*/}
            <Lottie
              options={defaultOptions}
              animationData={Sparkles}
              height={100}
              className="animation animation_sparkles"
              style={{
                width: "100%",
                zIndex: 99,
                overflow: "hidden",
              }}
            />

            <div className="creation">
              <div className="title-animated is-animation">
                <span>C</span>
                <span>R</span>
                <span>E</span>
                <span>A</span>
                <span>T</span>
                <span>I</span>
                <span>O</span>
                <span>N</span>
                <span>
                  <p>&#160;</p>
                </span>
                <span>
                  <p>&#160;</p>
                </span>
                <span>
                  <p>&#160;</p>
                </span>
                <span>E</span>
                <span>T</span>
              </div>
              <div className="title-animated is-animation">
                <span>C</span>
                <span>O</span>
                <span>L</span>
                <span>L</span>
                <span>A</span>
                <span>B</span>
                <span>O</span>
                <span>R</span>
                <span>A</span>
                <span>T</span>
                <span>I</span>
                <span>O</span>
                <span>N</span>
              </div>
            </div>
            {/*<img src="src/assets/images/icons/sparkle.svg" alt="sparkle" />*/}
            <Lottie
              options={defaultOptions}
              animationData={Sparkles}
              height={100}
              className="animation animation_sparkles"
              style={{
                width: "100%",
                zIndex: 99,
                overflow: "hidden",
              }}
            />
          </div>
        </div>
      </section>
      <section className="categories">
        <div className="categories-header">
          <h1>Projets</h1>
          <h3>choisis une catégorie : </h3>
        </div>
        <ul className="categories-list">
          <li>
            <input
              type="button"
              className="button_3"
              value="all"
              onClick={(event) => handleClick(event.target.value)}
            />
          </li>
          <li>
            <input
              type="button"
              className="button_3"
              value="html"
              onClick={(event) => handleClick(event.target.value)}
            />
          </li>
          <li>
            <input
              type="button"
              className="button_3"
              value="css"
              onClick={(event) => handleClick(event.target.value)}
            />
          </li>
          <li>
            <input
              type="button"
              className="button_3"
              value="sass"
              onClick={(event) => handleClick(event.target.value)}
            />
          </li>
          <li>
            <input
              type="button"
              className="button_3"
              value="tailwind"
              onClick={(event) => handleClick(event.target.value)}
            />
          </li>
          <li>
            <input
              type="button"
              className="button_3"
              value="javascript"
              onClick={(event) => handleClick(event.target.value)}
            />
          </li>
          <li>
            <input
              type="button"
              className="button_3"
              value="react"
              onClick={(event) => handleClick(event.target.value)}
            />
          </li>
          <li>
            <input
              type="button"
              className="button_3"
              value="nodejs"
              onClick={(event) => handleClick(event.target.value)}
            />
          </li>
          <li>
            <input
              type="button"
              className="button_3"
              value="express"
              onClick={(event) => handleClick(event.target.value)}
            />
          </li>
          <li>
            <input
              type="button"
              className="button_3"
              value="mysql"
              onClick={(event) => handleClick(event.target.value)}
            />
          </li>
          <li>
            <input
              type="button"
              className="button_3"
              value="drupal"
              onClick={(event) => handleClick(event.target.value)}
            />
          </li>
          <li>
            <input
              type="button"
              className="button_3"
              value="wordpress"
              onClick={(event) => handleClick(event.target.value)}
            />
          </li>
        </ul>
      </section>
      <section className="projects">
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={project.id} className="project">
              <div className="project-info">
                <h2>{project.title}</h2>
                <h3>{project.subtitle}</h3>
                <h4>{project.date}</h4>
                <div className="project-image">
                  <img src={project.image} />
                </div>
                <p>{project.intro}</p>
                <div className="links">
                  {project.githublink != "" && (
                    <a
                      href={project.githublink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Github} alt="github" />
                    </a>
                  )}
                  {project.websitelink != "" && (
                    <a
                      href={project.websitelink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Link} alt="link" />
                    </a>
                  )}
                  <div id="container">
                    {/* <a href="/projects" className="button">
                      <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                      </span>
                      <span className="button-text">See project</span>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
