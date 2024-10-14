import type { GetServerSidePropsContext } from "next";
import Link from "next/link";
import { useCallback, useState, useEffect } from "react";

import { getServerSession } from "@calcom/features/auth/lib/getServerSession";

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // Ajout de l'état isMobile

  const steps = [
    {
      title: "Planifiez des rendez-vous sans échanges inutiles",
      description:
        "Créez un compte, ajoutez vos services et activités avec une description détaillée pour aider vos clients à faire le meilleur choix. Plany rend la prise de rendez-vous rapide et facile.",
      image: "/plany_validation.webp",
      imageMobile: "/mobile_plany_validation.webp",
    },
    {
      title: "Ajoutez vos services et activités",
      description:
        "Renseignez vos services et activités avec des descriptions claires pour que vos clients trouvent facilement ce dont ils ont besoin. Simplifiez leur parcours avec des informations complètes.",
      image: "/plany_types_evenment.webp",
      imageMobile: "/mobile_plany_types_evenment.webp",
    },
    {
      title: "Définissez vos disponibilités",
      description:
        "Indiquez vos horaires disponibles, que ce soit des créneaux récurrents ou spécifiques. Gérez facilement votre emploi du temps et optimisez la prise de rendez-vous.",
      image: "/plany_diponibilte.webp",
      imageMobile: "/mobile_plany_diponibilte.webp",
    },
    {
      title: "Partagez votre lien de réservation",
      description:
        "Diffusez votre lien Plany.tn et permettez à vos clients de réserver leurs rendez-vous en toute simplicité. Facilitez-leur la prise de contact avec un système automatisé.",
      image: "/plany_reservation.webp",
      imageMobile: "/mobile_plany_reservation.webp",
    },
    {
      title: "Laissez vos clients réserver en ligne",
      description:
        "Avec votre lien Plany.tn, vos clients peuvent réserver en fonction de vos disponibilités en temps réel. Vous gardez le contrôle pour accepter, reporter ou refuser chaque réservation.",
      image: "/plany_date.webp",
      imageMobile: "/mobile_plany_date.webp",
    },
  ];

  // Fonction pour détecter l'état "mobile" basé sur la largeur de l'écran
  const checkIfMobile = () => {
    setIsMobile(window.innerWidth <= 768); // Par exemple, mobile si la largeur est <= 768px
  };

  useEffect(() => {
    // Vérifie si l'utilisateur est sur mobile au chargement
    checkIfMobile();
    // Écoute les changements de la taille de l'écran
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Utiliser useCallback pour mémoriser handleScroll
  const handleScroll = useCallback(() => {
    const offset = isMobile ? 200 : 350;
    const scrollY = window.scrollY - offset;
    const scrollFactor = isMobile ? 300 : 100;
    const newIndex = Math.min(Math.floor(scrollY / scrollFactor), steps.length - 1);

    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  }, [isMobile, activeIndex, steps.length]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]); // Inclut handleScroll, qui a maintenant steps.length comme dépendance

  return (
    <div className="home-page">
      {/* Header */}
      <header className="home-header">
        <div>
          <img src="/api/logo" alt="Plany.tn Logo" className="home-logo" />
        </div>
        <Link href="/auth/login">
          <button className="home-loginButton">Se connecter</button>
        </Link>
      </header>

      {/* Section principale */}
      <section className="home-section">
        <div className="home-halfSection">
          <h1 className="home-mainTitle">Plateforme de planification pour tous.</h1>
          <p className="home-description">
            Découvrez Plany.tn, le planificateur d&apos;événements pour tous. Concentrez-vous sur les
            rendez-vous, pas sur leur préparation.
          </p>
          <Link href="/signup">
            <button className="home-button">Sign Up</button>
          </Link>
        </div>
        <div className="home-halfSection">
          <img src="/mock-event-type-list.svg" alt="Planning Example" className="home-image" />
        </div>
      </section>

      {/* Section des étapes */}
      <section className="home-stepSection">
        <div className="home-stepWrapper">
          {/* Conteneur gauche - textes et descriptions */}
          <div className="home-leftContainer">
            {steps.map((step, index) => (
              <div key={index}>
                <h3
                  className={`home-stepTitle ${activeIndex === index || isMobile ? "home-activeTitle" : ""}`}>
                  {step.title}
                </h3>
                {(activeIndex === index || isMobile) && step.description && (
                  <p
                    className={`home-stepDescription ${
                      activeIndex === index ? "home-activeDescription" : ""
                    }`}>
                    {step.description}
                  </p>
                )}
                <div className="home-rightContainer">
                  {/* Afficher l'image uniquement si c'est l'index actif ou si c'est le premier index */}
                  {isMobile && step?.imageMobile && (
                    <img
                      src={step.imageMobile}
                      alt={step.title}
                      className="home-stepImage home-activeImage"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Conteneur droit - images */}
          <div className="home-rightContainer">
            {!isMobile && steps[activeIndex]?.image && (
              <img
                src={steps[activeIndex].image}
                alt={steps[activeIndex].title}
                className="home-stepImage home-activeImage"
              />
            )}
          </div>
        </div>
      </section>

      {/* Section finale */}
      <section className="home-stepSectionWhite">
        <p className="home-centeredText">Laissez les gens réserver selon vos disponibilités communes</p>
        <Link href="/signup">
          <button className="home-button">Sign Up</button>
        </Link>
      </section>
    </div>
  );
};

export async function getServerSideProps({ req, res }: GetServerSidePropsContext) {
  const session = await getServerSession({ req, res });

  if (session?.user?.id) {
    return { redirect: { permanent: false, destination: "/event-types" } };
  }

  return { props: {} };
}

export default HomePage;
