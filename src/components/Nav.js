import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-container" id="home">
      <nav className="nav-navbar">
        <div className="nav-title-container">
          <h1 className="nav-title">
            <Link to="/">EICS</Link>
          </h1>
        </div>
        <div className="nav-links-container">
          <ul className="nav-list">
            <li className="nav-link">
              <a href="/#aboutUs">ABOUT US</a>
            </li>
            <li>
              <a href="/#units">UNITS</a>
            </li>
            <li>
              <a href="/#contact">CONTACT US</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
