function Footer() {
  return (
    <footer>
      <section className="pre_footer">
        <div className="pre_footer_container">
          <div className="structure">
            <h5>Hello world ☺️ !</h5>
            <p>
              <a href="/about">En savoir plus sur moi</a>
            </p>
            <p>
              <a href="/projects">Découvrir mes projets</a>
            </p>
            <p>
              <a href="/contact">Contacte-moi</a>
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
                <a href="" target="_blank">
                  <img
                    src="/src/assets/images/icons/linkedin_blue.svg"
                    alt="linkedin-logo"
                  />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <img
                    src="/src/assets/images/icons/github_blue.svg"
                    alt="github-logo"
                  />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <img
                    src="/src/assets/images/icons/instagram_blue.svg"
                    alt="instagram-logo"
                  />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <img
                    src="/src/assets/images/icons/behance_blue.svg"
                    alt="behance-logo"
                  />
                </a>
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
