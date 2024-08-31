import "../styles/nav.css";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const currentPage = useLocation().pathname;
  return (
    <header className="col-12 nav">
      <Link
        to="/portfolio"
        className={
          currentPage === "/portfolio" ? "nav-link active" : "nav-link"
        }
      >
        Portfolio
      </Link>
      <Link
        to="/"
        className={currentPage == "/" ? "nav-link active" : "nav-link"}
      >
        About me
      </Link>
      <Link
        to="/Resume"
        key={3}
        className={currentPage === "/resume" ? "nav-link active" : "nav-link"}
      >
        Resume
      </Link>
      <Link
        to="/contact"
        className={currentPage === "/contact" ? "nav-link active" : "nav-link"}
      >
        Contact
      </Link>
    </header>
  );
}

export default Nav;
