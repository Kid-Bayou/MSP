import { Link } from "react-router-dom";

import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-first-part">
          <div className="footer-section">
            <h1 className="footer-header">MSP</h1>
            <p className="footer-text">
              Text text text Text text text Text text text Text text text Text
              text text Text text text Text text text Text text text Text text
              text Text text text Text text text Text text text
            </p>
            <div className="footer-socials">
              <img src={facebook} className="footer-socials-icons" />
              <img src={instagram} className="footer-socials-icons" />
              <img src={twitter} className="footer-socials-icons" />
            </div>
          </div>

          <div className="footer-section">
            <h2 className="footer-header">Our Services</h2>
            <Link className="footer-link">Import Export</Link>
            <Link className="footer-link">Property Management</Link>
          </div>

          <div className="footer-section">
            <h2 className="footer-header">Explore More</h2>
            <Link className="footer-link">About</Link>
            <Link className="footer-link">Contact Us</Link>
            <Link className="footer-link">Blog</Link>
          </div>

          <div className="footer-section">
              <h2 className="footer-header">Contact Details</h2>
              <p className="footer-text">contact@msptradingplc.com</p>
              <p className="footer-text">+251 944742181</p>
              <p className="footer-text">+251 911611047</p>
              <p className="footer-text">
                Shimekit Commercial Center 5th Floor 131A Addis Ababa Ethiopia
              </p>
          </div>
        </div>
        <hr className="footer-line" />
        <div className="footer-second-part">
          <p className="footer-copyright">© 2024 MSP. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
