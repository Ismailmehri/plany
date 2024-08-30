import React from "react";

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-cal text-4xl text-gray-900 sm:text-5xl lg:text-6xl">
            Conditions Générales d&apos;Utilisation
          </h1>
          <p className="mt-4 text-lg leading-6 text-gray-600">Date d&apos;effet : 14/04/2021</p>
        </div>

        <div className="prose mx-auto mt-8 max-w-6xl text-left">
          <h2 className="text-3xl text-gray-900">Introduction</h2>
          <p>
            Bienvenue chez Plany.tn, Inc. (&quot;Société&quot;, &quot;nous&quot;, &quot;notre&quot;,
            &quot;nos&quot;) ! En consultant nos Conditions Générales, prenez un moment pour lire
            attentivement les informations suivantes.
          </p>
          <p>
            Ces Conditions Générales d&apos;Utilisation (&quot;Conditions&quot;) régissent votre utilisation
            de notre site web situé à l&apos;adresse https://plany.tn, opéré par Plany.tn, Inc.
          </p>
          <p>
            Notre Politique de Confidentialité régit également l&apos;utilisation de notre Service et explique
            comment nous collectons, protégeons et divulguons les informations issues de votre utilisation de
            nos pages web.
          </p>
          <p>
            Votre accord avec nous inclut ces Conditions et notre Politique de Confidentialité
            (&quot;Accords&quot;). Vous reconnaissez avoir lu et compris ces Accords, et acceptez d&apos;y
            être lié.
          </p>

          <h2 className="text-3xl text-gray-900">Communications</h2>
          <p>
            En créant un compte sur notre Service, vous acceptez de recevoir des newsletters, des supports
            marketing ou promotionnels et d&apos;autres informations que nous pourrions vous envoyer.
            Toutefois, vous pouvez vous désabonner de tout ou partie de ces communications en suivant le lien
            de désabonnement ou en nous envoyant un email.
          </p>

          <h2 className="text-3xl text-gray-900">Achats</h2>
          <p>
            Si vous souhaitez acheter un produit ou un service disponible via notre Service
            (&quot;Achat&quot;), il pourra vous être demandé de fournir certaines informations relatives à
            votre achat, y compris, sans s&apos;y limiter, votre numéro de carte de crédit, la date
            d&apos;expiration de votre carte de crédit, votre adresse de facturation, et vos informations
            d&apos;expédition.
          </p>

          <h2 className="text-3xl text-gray-900">Abonnements</h2>
          <p>
            Certaines parties du Service sont facturées sur une base d&apos;abonnement
            (&quot;Abonnement(s)&quot;). Vous serez facturé à l&apos;avance sur une base récurrente et
            périodique (&quot;Cycle de Facturation&quot;).
          </p>

          <h2 className="text-3xl text-gray-900">Propriété Intellectuelle</h2>
          <p>
            Le Service et son contenu original (à l&apos;exception du Contenu fourni par les utilisateurs),
            les fonctionnalités et la fonctionnalité sont et resteront la propriété exclusive de Plany.tn,
            Inc. et de ses concédants. Le Service est protégé par les droits d&apos;auteur, les marques de
            commerce, et autres lois des pays étrangers.
          </p>

          <h2 className="text-3xl text-gray-900">Contactez-nous</h2>
          <p>Si vous avez des questions concernant ces conditions générales, veuillez nous contacter :</p>
          <p>Par email : support@plany.tn</p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
