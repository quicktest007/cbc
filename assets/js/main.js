(function () {
  var hashPages = {
    "": "index.html",
    home: "index.html",
    ourbeliefs: "beliefs.html",
    thegospel: "gospel.html",
    newtocbc: "welcome.html",
    contact: "contact.html",
    ministries: "ministries.html",
    Ministries: "ministries.html",
    corunnabibleconference623: "conference.html"
  };

  var hash = window.location.hash.replace(/^#/, "");
  var current = window.location.pathname.split("/").pop() || "index.html";
  if (hash && hashPages[hash] && hashPages[hash] !== current) {
    window.location.replace(hashPages[hash]);
    return;
  }

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.querySelectorAll(".accordion").forEach(function (button) {
    button.addEventListener("click", function () {
      var panel = document.getElementById(button.getAttribute("aria-controls"));
      var expanded = button.getAttribute("aria-expanded") === "true";

      document.querySelectorAll(".accordion").forEach(function (other) {
        other.setAttribute("aria-expanded", "false");
        var otherPanel = document.getElementById(other.getAttribute("aria-controls"));
        if (otherPanel) otherPanel.classList.remove("is-open");
      });

      if (!expanded && panel) {
        button.setAttribute("aria-expanded", "true");
        panel.classList.add("is-open");
      }
    });
  });
})();
