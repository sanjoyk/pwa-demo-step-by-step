var deferredPrompt;

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => {
      console.log("Service worker Registered!")
    })
    .catch(function (err) {
      console.log("error==", err);
    });
}

window.addEventListener("beforeinstallprompt", function (event) {
  console.log("before installprompt fired");
  event.preventDefault();
  deferredPrompt = event;
  return false;
})

fetch("https://httpbin.org/ip")
  .then(function (response) {
    console.log("[Request]", response);
    return response.json();
  })
  .then(function (data) {
    console.log("[Request]", data);
  })
  .catch(function (err) {
    console.log("[Request]", err)
  });


fetch("https://httpbin.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ msg: "Data message sending to server!" })
})
  .then(function (response) {
    console.log("[Response]", response);
    return response.json();
  })
  .then(function (data) {
    console.log("[Response] data", data);
  })
  .catch(function (err) {
    console.log("[Response]", err)
  });



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


