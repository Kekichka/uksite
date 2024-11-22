import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Українська Література</h3>
          <p>© 2024 Всі права захищені</p>
        </div>
        <div className="footer-middle">
          <ul>
          <li><a href="#about">Про нас</a></li>
              <li><a href="#contact">Контакти</a></li>
              <li><a href="#privacy">Політика конфіденційності</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://www.citypng.com/public/uploads/preview/round-black-facebook-fb-logo-icon-sign-701751695134781upkxjlqwck.png" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://i.pinimg.com/736x/91/8b/20/918b20dc0aa716e09fd0a58f9dd8e720.jpg" alt="Twitter" className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://www.citypng.com/public/uploads/preview/black-instagram-social-media-outline-logo-icon-701751695137034d7zndmect4.png" alt="Instagram" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
