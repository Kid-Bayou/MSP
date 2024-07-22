import { Link, NavLink } from "react-router-dom";
import logo from "../assets/mspLogo_01.png";

function Header() {
  return (
    <>
      <header className="header">
        <Link className="header-title" to="/">
          <img src={logo} className="header-logo" />
        </Link>
        <nav className="nav">
          <NavLink to="/about">About</NavLink>

          <NavLink to="/services">Services</NavLink>

          <NavLink to="/news">News</NavLink>

          <NavLink to="/contactus">Contact Us</NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;
