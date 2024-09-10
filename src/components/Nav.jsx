import "./styles/nav.css";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const currentPage = useLocation().pathname;
  return (
    <header className="col-12 nav">
      <h3>
        <Link
          to="https://github.com/ekhay-hit"
          className="developer"
          target="_blank"
        >
          Khay
        </Link>
      </h3>
      <Link
        to="/"
        className={currentPage === "/" ? "nav-link activeTab" : "nav-link"}
      >
        About me
      </Link>

      <Link
        to="/portfolio"
        className={
          currentPage === "/portfolio" ? "nav-link activeTab" : "nav-link"
        }
      >
        Portfolio
      </Link>

      <Link
        to="/contact"
        className={
          currentPage === "/contact" ? "nav-link activeTab" : "nav-link"
        }
      >
        Contact
      </Link>

      <Link
        to="/resume"
        className={
          currentPage === "/resume" ? "nav-link activeTab" : "nav-link"
        }
      >
        Resume
      </Link>
    </header>
  );
}

export default Nav;
