import Search from "./Search";
import "../../style/header.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mb-5">
      <nav className="container navbar  navbar-expand-md  bg-dark fixed-top navbar-dark">
        <Link to="/" className="navbar-brand">
          News
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">{Search()}</li>

            <li className="nav-item dropdown">
              <a className="nav-link ml-2 text-center" href="#">
                Category
              </a>
              <div className="dropdown-menu text-center bg-secondary">
                <Link className="dropdown-item" to="/news/business">
                  Business
                </Link>
                <Link className="dropdown-item" to="/news/entertainment">
                  Entertainment
                </Link>
                <Link className="dropdown-item" to="/news/science">
                  Science
                </Link>
                <Link className="dropdown-item" to="/news/sports">
                  Sports
                </Link>
                <Link className="dropdown-item" to="/news/technology">
                  Technology
                </Link>
              </div>
            </li>

            <li className="nav-item">
              <Link className="nav-link ml-2 text-center" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ml-2 text-center" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
