import { useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Hello from "../assets/animations/hello.json";
import HomeLanding from "../assets/animations/landing.json";
import Hi from "../assets/animations/hi.json";
import WorldWideWeb from "../assets/animations/worldwideweb.json";
import Github from "../assets/images/icons/github2.svg";
import WebLink from "../assets/images/icons/link.svg";
import ProjectData from "../components/ProjectData";

function Home() {
  const latestProjects = ProjectData.slice(0, 3);
  const [projects, setProjects] = useState(latestProjects);
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  const defaultOptions = {
    autoplay: true,
    loop: true,
    animationData: HomeLanding,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <section className="banner">
        <div className="circle">
          <svg fill="rgba(1, 46, 245, 0.1)" xmlns="http://www.w3.org/2000/svg">
            <circle cx="140" cy="140" r="140" />
          </svg>
        </div>
        <Lottie
          options={defaultOptions}
          animationData={Hi}
          height={50}
          speed={0.5}
          className="animation animation_hi"
          style={{
            width: "100%",
            zIndex: 99,
            overflow: "hidden",
          }}
        />
        <Lottie
          options={defaultOptions}
          animationData={HomeLanding}
          height={50}
          className="animation animation_home"
          style={{
            width: "100%",
            zIndex: 99,
            overflow: "hidden",
          }}
        />
        <Lottie
          options={defaultOptions}
          animationData={Hello}
          height={50}
          className="animation animation_hello"
          style={{
            width: "100%",
            zIndex: 99,
            overflow: "hidden",
          }}
        />
      </section>
      <section className="about">
        <h2>un peu plus à mon sujet</h2>
        <div className="about_content">
          <Lottie
            options={defaultOptions}
            animationData={WorldWideWeb}
            height={50}
            className="animation animation_www"
            style={{
              width: "100%",
              zIndex: 99,
              overflow: "hidden",
            }}
          />
          <div>
            <h3>
              Hello world !<br /> Moi c'est Alexandra.
            </h3>
            <p>
              Graphiste de formation je suis actuellement en reconversion
              professionnelle pour devenir développeuse web. Je suis passionné
              par le web design et le développement web. J'adore apprendre de
              nouvelles choses et améliorer mes compétences.
            </p>
            <div id="container">
              <Link to="/about" className="button" onClick={toTop}>
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">En savoir plus</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="projects">
        <h2>derniers projets</h2>
        <h3></h3>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={project.id} className="project">
              <div className="project-info">
                <h3>{project.title}</h3>
                <h4>{project.date}</h4>
                <img src={project.image} className="project-image" />
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
                      <img src={WebLink} alt="link" />
                    </a>
                  )}
                  <div className="tooltip">
                    <a role="link" aria-disabled="true" className="button_2">
                      Voir plus
                    </a>
                    <span className="tooltiptext">en construction</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div id="container">
          <Link to="/projects" className="button" onClick={toTop}>
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">tous les projets</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
