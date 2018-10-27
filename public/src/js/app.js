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


var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve("This is executed once the timer is done");
    reject({ code: 500, message: "An error occured" });
  }, 3000);
})

promise.then(function (text) {
  return text;
}).then(function (newText) {
  console.log(newText);
}).catch(function (err) {
  console.log(err.code, err.message);
});

console.log("This is executed right after setTiemout()");


