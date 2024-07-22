import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-company">
          <h3>Auctionopolis</h3>
          <p>
            Discover a world of bidding excitement. Join us for thrilling
            auctions, exclusive finds, and unbeatable deals. Your trusted
            destination for buying and selling. Start bidding today!
          </p>
        </div>
        <div className="footer-quicklinks">
          <h3>Quicklinks</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link>Blog</Link>
          <Link>Products</Link>
        </div>
        <div className="footer-resources">
          <h3>Resources</h3>
          <Link>Help</Link>
          <Link>Terms & Conditions</Link>
          <Link>FAQ</Link>
          <Link>Contact Us</Link>
          <Link>Support</Link>
        </div>
    
      </div>

      <div className="footer-copyright">
        <hr />
        <p>© 2024 MSP. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;