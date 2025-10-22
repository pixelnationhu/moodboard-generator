// analytics.js
export const sendEvent = (eventName, params = {}) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", eventName, params);
    console.log("📊 GA event elküldve:", eventName, params);
  } else {
    console.warn("⚠️ GA nem elérhető — event nem lett elküldve:", eventName);
  }
};
