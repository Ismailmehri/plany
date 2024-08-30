import React from "react";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-cal text-4xl text-gray-900 sm:text-5xl lg:text-6xl">
            Politique de Confidentialité
          </h1>
          <p className="mt-4 text-lg leading-6 text-gray-600">Date d&apos;effet : 24/10/2023</p>
        </div>

        <div className="prose mx-auto mt-8 max-w-6xl text-left">
          <h2 className="text-3xl text-gray-900">Introduction</h2>
          <p>Bienvenue chez Plany.tn.</p>
          <p>
            Plany.tn (&quot;nous&quot;, &quot;notre&quot; ou &quot;nos&quot;) exploite le site
            https://plany.tn (ci-après dénommé &quot;Service&quot;).
          </p>
          <p>
            Notre Politique de Confidentialité régit votre visite sur https://plany.tn, et explique comment
            nous collectons, sauvegardons et divulguons les informations résultant de votre utilisation de
            notre Service.
          </p>
          <p>
            Nous utilisons vos données pour fournir et améliorer le Service. En utilisant le Service, vous
            acceptez la collecte et l&apos;utilisation des informations conformément à cette politique. Sauf
            indication contraire dans cette Politique de Confidentialité, les termes utilisés dans cette
            Politique de Confidentialité ont la même signification que dans nos Conditions Générales.
          </p>

          <h2 className="text-3xl text-gray-900">Définitions</h2>
          <p>
            <strong>SERVICE</strong> désigne le site web https://plany.tn exploité par Plany.tn.
          </p>
          <p>
            <strong>DONNÉES PERSONNELLES</strong> signifie les données concernant un individu vivant qui peut
            être identifié à partir de ces données (ou à partir de celles-ci et d&apos;autres informations en
            notre possession ou susceptibles de l&apos;être).
          </p>
          <p>
            <strong>DONNÉES D&apos;UTILISATION</strong> sont des données collectées automatiquement, soit
            générées par l&apos;utilisation du Service, soit à partir de l&apos;infrastructure du Service
            elle-même (par exemple, la durée d&apos;une visite de page).
          </p>
          <p>
            <strong>COOKIES</strong> sont de petits fichiers stockés sur votre appareil (ordinateur ou
            appareil mobile).
          </p>

          <h2 className="text-3xl text-gray-900">Collecte et Utilisation des Informations</h2>
          <p>
            Nous collectons plusieurs types d&apos;informations à diverses fins pour vous fournir et améliorer
            notre Service.
          </p>
          <p>
            <strong>Données Personnelles</strong>
          </p>
          <p>
            Lorsque vous utilisez notre Service, il peut vous être demandé de nous fournir certaines
            informations personnelles identifiables qui peuvent être utilisées pour vous contacter ou vous
            identifier (&quot;Données Personnelles&quot;).
          </p>
          <p>
            <strong>Données d&apos;Utilisation</strong>
          </p>
          <p>
            Nous pouvons également collecter des informations que votre navigateur envoie chaque fois que vous
            visitez notre Service ou lorsque vous accédez au Service par ou via un appareil mobile
            (&quot;Données d&apos;Utilisation&quot;).
          </p>

          <h2 className="text-3xl text-gray-900">Utilisation des Données</h2>
          <p>Plany.tn utilise les données collectées à diverses fins :</p>
          <ul>
            <li>Pour fournir et maintenir notre Service;</li>
            <li>Pour vous notifier des changements à notre Service;</li>
            <li>
              Pour permettre votre participation aux fonctionnalités interactives de notre Service lorsque
              vous choisissez de le faire;
            </li>
            <li>Pour fournir un support client;</li>
            <li>
              Pour recueillir des analyses ou des informations précieuses afin d&apos;améliorer notre Service;
            </li>
            <li>Pour surveiller l&apos;utilisation de notre Service;</li>
            <li>Pour détecter, prévenir et résoudre les problèmes techniques;</li>
          </ul>

          <h2 className="text-3xl text-gray-900">Conservation des Données</h2>
          <p>
            Nous conserverons vos Données Personnelles uniquement le temps nécessaire aux fins énoncées dans
            cette Politique de Confidentialité. Nous conserverons et utiliserons vos Données Personnelles dans
            la mesure nécessaire pour se conformer à nos obligations légales, résoudre des litiges et faire
            respecter nos accords et politiques légales.
          </p>

          <h2 className="text-3xl text-gray-900">Sécurité des Données</h2>
          <p>
            La sécurité de vos données est importante pour nous, mais rappelez-vous qu&apos;aucune méthode de
            transmission sur Internet ou méthode de stockage électronique n&apos;est sécurisée à 100 %. Bien
            que nous nous efforcions d&apos;utiliser des moyens commercialement acceptables pour protéger vos
            Données Personnelles, nous ne pouvons garantir leur sécurité absolue.
          </p>

          <h2 className="text-3xl text-gray-900">Vos Droits en matière de Protection des Données</h2>
          <p>
            Si vous êtes résident de l&apos;Union européenne (UE) ou de l&apos;Espace économique européen
            (EEE), vous disposez de certains droits en matière de protection des données, couverts par le
            RGPD.
          </p>

          <h2 className="text-3xl text-gray-900">Contactez-nous</h2>
          <p>
            Si vous avez des questions concernant cette Politique de Confidentialité, veuillez nous contacter
            :
          </p>
          <p>Par email : support@plany.tn</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
