import Lottie from "lottie-react";
import Paperplane from "/src/assets/animations/paperplane.json";

function Contact() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Paperplane,
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
          animationData={Paperplane}
          height={100}
          className="paperplane"
          style={{
            width: "100%",
            zIndex: 99,
            overflow: "hidden",
          }}
        />
      </section>
      <section className="contact">
        <h1>contact</h1>
        <div className="contact">
          <h2>get in touch ?</h2>
          <p>
            Envie de juste me dire bonjour, de me demander mon CV ou de voir si
            nous pouvons construire quelque chose d'incroyable ensemble ?
            <br />
            <strong>Je serais ravie de te lire.</strong>
          </p>
          <a
            href="mailto:alexandrarodrigues.contact@gmail.com?subject=What do you want to talk about?&body=Just let me know."
            className="button_2"
          >
            contacte-moi
          </a>
        </div>
      </section>

      <p>
        <br />
        <br />
        <br />
      </p>
    </>
  );
}

export default Contact;
