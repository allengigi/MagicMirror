Module.register("cisco", {
    defaults: {
      rasaEndpoint: "http://localhost:5005/webhooks/rest/webhook", // Update with your Rasa endpoint URL
      rasaLanguage: "en", // Update with the language of your Rasa AI model
    },
  
    start: function () {
      this.sendSocketNotification("CONNECT");
    },
  
    getDom: function () {
      const wrapper = document.createElement("div");
      wrapper.id = "response";
      return wrapper;
    },
  
    socketNotificationReceived: function (notification, payload) {
      if (notification === "RESPONSE") {
        this.showResponse(payload);
      }
    },
  
    showResponse: function (response) {
      const responseElement = document.getElementById("response");
      responseElement.innerHTML = response;
      responseElement.style.display = "block";
      responsiveVoice.speak(response, "UK English Male"); // Adjust the voice and language based on your preferences
    },
  });
  