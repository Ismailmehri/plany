import Link from "next/link";

const Footer = () => {
  const footerStyle: React.CSSProperties = {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    padding: "20px 10%",
    textAlign: "center" as React.CSSProperties["textAlign"], // Type assertion for textAlign
  };

  const sectionStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    flexWrap: "wrap",
  };

  const columnStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: "1 1 200px",
    margin: "10px",
  };

  const linkStyle: React.CSSProperties = {
    color: "#fff",
    textDecoration: "none",
    margin: "5px 0",
  };

  const logoStyle: React.CSSProperties = {
    width: "30px",
    height: "30px",
    margin: "0 5px",
  };

  return (
    <footer style={footerStyle}>
      <div style={sectionStyle}>
        <div style={columnStyle}>
          <img src="/api/logo?type=android-chrome-192" alt="Logo" style={logoStyle} />
          <span>Plany</span>
        </div>
        <div style={columnStyle}>
          <Link href="https://plany.tn/privacy" style={linkStyle} target="_blank" rel="noopener noreferrer">
            Politique de confidentialité
          </Link>
          <Link href="https://plany.tn/terms" style={linkStyle} target="_blank" rel="noopener noreferrer">
            Conditions générales
          </Link>
        </div>
        <div style={columnStyle}>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "-5px" }}>
            <a href="https://www.facebook.com/plany.Tun" target="_blank" rel="noopener noreferrer">
              <img src="/facebook.svg" alt="Facebook" style={{ width: "30px", marginRight: "10px" }} />
            </a>
            <a href="https://www.instagram.com/plany.tn/" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.svg" alt="Instagram" style={{ width: "30px" }} />
            </a>
          </div>
        </div>
      </div>
      <p>
        Notre mission est de connecter les personnes à travers la planification de rendez-vous de manière
        fluide et intuitive.
      </p>
      <p>© 2024 Plany.tn. Tous droits réservés. Rue Al KARAMA – Monastir – Tunisie </p>
    </footer>
  );
};

export default Footer;
