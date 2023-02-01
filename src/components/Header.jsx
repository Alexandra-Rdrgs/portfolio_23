import { Link } from "react-router-dom";

function Header() {
  const closeMenu = () => {
    document.querySelector("#side-menu").checked = false;
    window.scrollTo(0, 0);
  };
  return (
    <header className="header">
      <a href="/" className="logo">
        <img src="/src/assets/images/logo.png" alt="logo" />
      </a>
      <input className="side-menu" type="checkbox" id="side-menu" />
      <label className="hamb" htmlFor="side-menu">
        <span className="hamb-line"></span>
      </label>

      <nav className="nav">
        <ul className="menu">
          <li>
            <Link to="/" onClick={closeMenu}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              Parcours
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={closeMenu}>
              Projets
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
// Path: src/layouts/Header.scss
