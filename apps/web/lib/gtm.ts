export const initGTM = () => {
  const gtmId = "GTM-NLVDRV7V";

  if (!gtmId) {
    console.warn("Google Tag Manager ID is not defined.");
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });
};
