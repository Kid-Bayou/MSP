import { Link } from "react-router-dom";

import logo from "../assets/mspLogo_01.png";

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
              <p>twitter</p>
              <p>facebook</p>
              <p>instagram</p>
            </div>
          </div>
          <div className="footer-section">
            <p className="footer-two-p">Our Services</p>
            <Link>Import Export</Link>
            <Link>Property Management</Link>
          </div>
          <div className="footer-section">
            <p className="footer-two-p">Expolore More</p>
            <Link>About</Link>
            <Link>Contact Us</Link>
            <Link>Blog</Link>
          </div>
          <div className="footer-section">
            <div className="footer-two-row">
              <p className="footer-two-p">Contact Details</p>
              <p>contact@msptradingplc.com</p>
              <p>+251 944742181</p>
              <p>+251 911611047</p>
              <p className="footer-two-n">
                Shimekit Commercial Center 5th Floor 131A Addis Ababa Ethiopia
              </p>
            </div>
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
