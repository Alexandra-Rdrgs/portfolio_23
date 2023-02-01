import { Link } from "react-router-dom";
import Linkedin from "../assets/images/icons/linkedin_blue.svg";
import Github from "../assets/images/icons/github_blue.svg";
import Instagram from "../assets/images/icons/instagram_blue.svg";
import Behance from "../assets/images/icons/behance_blue.svg";

function Footer() {
  return (
    <footer>
      <section className="pre_footer">
        <div className="pre_footer_container">
          <div className="structure">
            <h5>Hello world ☺️ !</h5>
            <p>
              <Link to="/about">En savoir plus sur moi</Link>
            </p>
            <p>
              <Link to="/projects">Découvrir mes projets</Link>
            </p>
            <p>
              <Link to="/contact">Contacte-moi</Link>
            </p>
            {/* <p>
            <a href="" target="_blank">
              This is my creative side (coming soon)
            </a>
          </p> */}
          </div>
          <div className="social">
            <h5>Feeling social ?</h5>
            <p>Retrouve-moi sur :</p>
            <ul>
              <li>
                <Link
                  to="https://www.linkedin.com/in/alexandra-rdrgs/"
                  target="_blank"
                >
                  <img src={Linkedin} alt="linkedin-logo" />
                </Link>
              </li>
              <li>
                <Link to="https://github.com/Alexandra-Rdrgs" target="_blank">
                  <img src={Github} alt="github-logo" />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.instagram.com/__heyitsalexandra/"
                  target="_blank"
                >
                  <img src={Instagram} alt="instagram-logo" />
                </Link>
              </li>
              <li>
                <Link to="https://www.behance.net/alexandra-rdrgs" target="_blank">
                  <img src={Behance} alt="behance-logo" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="footer">
        <p>© 2023 - All rights reserved - Alexandra Rodrigues</p>
      </section>
    </footer>
  );
}

export default Footer;
