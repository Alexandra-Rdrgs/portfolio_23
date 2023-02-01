import Lottie from "lottie-react";
import Illustrator from "/src/assets/animations/gd1.json";
import Code from "/src/assets/animations/code.json";
import Creation from "/src/assets/animations/animation_2.json";
import Mouse from "/src/assets/animations/mouse.json";
import WorldWideWeb from "/src/assets/animations/worldwideweb.json";
import { Link } from "react-router-dom";

function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: WorldWideWeb,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <section className="banner">
        <svg fill="rgba(1, 46, 245, 0.1)" xmlns="http://www.w3.org/2000/svg">
          <circle cx="140" cy="140" r="140" />
        </svg>
        <Lottie
          options={defaultOptions}
          animationData={Creation}
          height={100}
          className="animation animation_creation"
          style={{
            width: "100%",
            zIndex: 99,
            overflow: "hidden",
          }}
        />
      </section>
      <section className="about">
        <h1>on se connait ? </h1>
        <div className="subtitle">
          <Lottie
            options={defaultOptions}
            animationData={WorldWideWeb}
            height={100}
            className="animation animation_www"
            style={{
              width: "100%",
              zIndex: 99,
              overflow: "hidden",
            }}
          />
          <h3>
            Hello world, moi c'est Alexandra ! Graphiste de formation, je me
            perfectionne actuellement au développement web.
          </h3>
        </div>
        <div className="part part1">
          <p>
            J'ai rejoint la Wild Code School en mars 2022, pour une formation
            intensive de cinq mois, orientée Javascript/React/Nodejs, et s'est
            ponctuée par un stage de quatre mois au sein de la créative agence
            numérique Retrokube, située à Reims. Plus que motivée que jamais à
            continuer de progresser et à apprendre, je continue avec la Wild
            Code School pour une nouvelle formation, cette fois-ci d'un an, et
            en alternance. Je suis donc maintenant à la recherche d'une
            entreprise pour alternance d'une durée d'une année tant que
            développeuse web.
          </p>
        </div>
        <div className="part part2">
          <Lottie
            options={defaultOptions}
            animationData={Illustrator}
            height={100}
            className="animation animation_illustrator"
            style={{
              width: "100%",
              zIndex: 99,
              overflow: "hidden",
            }}
          />
          <p>
            Je suis passionnée de développement web autant que de design
            graphique et de nouvelles technologies de façon générale. J'adore
            écrire du code et déplacer des pixels sur le World Wide Web.
          </p>
        </div>
        <div className="part part3">
          <Lottie
            options={defaultOptions}
            animationData={Mouse}
            height={100}
            className="animation animation_mouse"
            style={{
              width: "10%",
              zIndex: 99,
              overflow: "hidden",
            }}
          />
          <p>
            Mon objectif est de créer des choses qui vivent sur Internet, que
            cela soit des sites Web, des applications ou tout autre élément
            intermédiaire, qui proposent des expériences parfaites au pixel près
            tout en restant performantes.
          </p>
        </div>
        <div className="part part4">
          <Lottie
            options={defaultOptions}
            animationData={Code}
            height={50}
            className="animation animation_code"
            style={{
              width: "100%",
              zIndex: 99,
              overflow: "hidden",
            }}
          />
          <p>
            Je suppose que je peux dire que je suis une web développeuse web
            passionnée, qui aime créer des interfaces et des expériences
            élégantes, mais qui est aussi capable de s'occuper des tâches
            backend.
            <br />
            <br />
          </p>
        </div>
        <Link to="/contact" className="button_2">
          contacte-moi
        </Link>
      </section>
    </>
  );
}

export default About;
