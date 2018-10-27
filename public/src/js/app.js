var deferredPrompt;

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => {
      console.log("Service worker Registered!")
    });
}

window.addEventListener("beforeinstallprompt", function (event) {
  console.log("before installprompt fired");
  event.preventDefault();
  deferredPrompt = event;
  return false;
})


