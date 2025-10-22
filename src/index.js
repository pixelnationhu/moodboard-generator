import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals.js";


const GA_MEASUREMENT_ID = "G-0DTFCQ96EE";

function injectGA() {
  if (document.getElementById("ga-script")) return; 


  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script1.id = "ga-script";
  document.head.appendChild(script1);


  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
  `;
  document.head.appendChild(script2);
}


if (typeof window !== "undefined" && !window.gtag) {
  injectGA();
}


const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("❌ Nem található #root elem a DOM-ban!");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// import * as serviceWorkerRegistration from "./service-worker";
// serviceWorkerRegistration.register();


reportWebVitals();
