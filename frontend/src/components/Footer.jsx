import React from "react";

const Footer = () => {
  const year = new Date().getFullYear(); // Dynamic Year

  return (
    <footer style={footerStyles.container}>
      {/* Logo and About Section */}
      <div style={footerStyles.section}>
        <h2 style={footerStyles.logo}>My E-Commerce</h2>
        <p style={footerStyles.text}>
          Your one-stop shop for all your needs. Quality products at the best prices.
        </p>
      </div>

      {/* Quick Links Section */}
      <div style={footerStyles.section}>
        <h3 style={footerStyles.heading}>Quick Links</h3>
        <ul style={footerStyles.list}>
          <li><a href="/about" style={footerStyles.link}>About Us</a></li>
          <li><a href="/contact" style={footerStyles.link}>Contact Us</a></li>
          <li><a href="/policy" style={footerStyles.link}>Privacy Policy</a></li>
          <li><a href="/faq" style={footerStyles.link}>FAQs</a></li>
        </ul>
      </div>

      {/* Contact Info Section */}
      <div style={footerStyles.section}>
        <h3 style={footerStyles.heading}>Contact Us</h3>
        <ul style={footerStyles.list}>
          <li style={footerStyles.text}>Email: support@shopease.com</li>
          <li style={footerStyles.text}>Phone: +123-456-7890</li>
          <li style={footerStyles.text}>Address: 123 ShopEase St, Commerce City</li>
        </ul>
      </div>

      {/* Social Media Section */}
      <div style={footerStyles.section}>
        <h3 style={footerStyles.heading}>Follow Us</h3>
        <div style={footerStyles.socials}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" style={footerStyles.link}>Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" style={footerStyles.link}>Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" style={footerStyles.link}>Instagram</a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={footerStyles.bottom}>
        <p>&copy; {year} ShopEase. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

const footerStyles = {
  container: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px 40px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "left",
  },
  section: {
    flex: "1 1 200px",
    minWidth: "200px",
    margin: "10px",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#ffa726",
    marginBottom: "10px",
  },
  heading: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#ffcc80",
  },
  list: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  link: {
    color: "#ffa726",
    textDecoration: "none",
    marginBottom: "5px",
    display: "block",
    transition: "color 0.3s ease",
  },
  linkHover: {
    color: "#ffcc80",
  },
  text: {
    marginBottom: "5px",
  },
  socials: {
    display: "flex",
    gap: "10px",
  },
  bottom: {
    width: "100%",
    textAlign: "center",
    marginTop: "20px",
    borderTop: "1px solid #555",
    paddingTop: "10px",
    fontSize: "14px",
  },
};

export default Footer;
