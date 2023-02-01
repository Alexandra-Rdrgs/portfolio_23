import { useParams } from "react-router-dom";
import ProjectData from "../components/ProjectData";

function Project() {
  const { id } = useParams();
  const project = ProjectData.find((project) => project.id === id);

  return (
    <div>
      <h1>{project.title}</h1>
      <h2>{project.subtitle}</h2>
      <h3>{project.date}</h3>
      <h4>{project.intro}</h4>
      <img src={project.image} alt={project.title} />
      <p>{project.intro}</p>
      <p>{project.desc}</p>
      <section>
        <h4>Technologies used</h4>
        <ul>
          {project.technology.map((technology, index) => (
            <li key={index}>{technology}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Project;
