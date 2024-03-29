import React from 'react';
import '../Assets/css/Footer.css'; // Import your custom footer styles

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>
            We are dedicated to providing fresh, organic fruits and vegetables to promote a healthy lifestyle.
          </p>
        </div>

        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: info@organicfruitsandveggies.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        <div className="footer-section">
          <h2>Follow Us</h2>
          <p>Stay connected on social media for updates and promotions:</p>
          <div className="social-icons">
            {/* Add your social media icons and links here */}
            <a href="index.html" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook">
               
              </i>
            </a>
            <a href="index.html" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="index.html" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 Organic Fruits and Veggies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
