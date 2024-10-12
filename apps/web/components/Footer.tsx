import Link from "next/link";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    padding: "20px 10%",
    textAlign: "center",
  };

  const sectionStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto", // Centrer le footer sur la page
    flexWrap: "wrap", // Permet aux éléments de passer à la ligne sur mobile
  };

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: "1 1 200px", // Permet aux colonnes de s'étendre ou de se rétrécir
    margin: "10px", // Espacement entre les colonnes
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    margin: "5px 0", // Espacement vertical entre les liens
  };

  const logoStyle = {
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
