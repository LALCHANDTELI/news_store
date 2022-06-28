import Search from "./Search";
import "../../style/header.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mb-5">
      <nav class="container navbar  navbar-expand-md  bg-dark fixed-top navbar-dark">
        <Link to="/" class="navbar-brand">
          News
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>







        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">

            <li class="nav-item">
             {Search()}
            </li>


            <li class="nav-item dropdown">
      <a class="nav-link ml-2 text-center" href="#" >
        Category
      </a>
      <div class="dropdown-menu text-center bg-secondary">
        <Link class="dropdown-item" to="/news/business">Business</Link>
        <Link class="dropdown-item" to="/news/entertainment">Entertainment</Link>
        <Link class="dropdown-item" to="/news/science">Science</Link>
        <Link class="dropdown-item" to="/news/sports">Sports</Link>
        <Link class="dropdown-item" to="/news/technology">Technology</Link>
      </div>
      
    </li>

            <li class="nav-item">
              <a class="nav-link ml-2 text-center" target="_blank" href="https://lalchandteli.herokuapp.com/#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ml-2 text-center"target="_blank" href="https://lalchandteli.herokuapp.com/#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
