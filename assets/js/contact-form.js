/* Contact form submission.
   The form is visual only until a form service is connected.
   Replace the body of handleSubmit with that service's request. */

(function () {
  var form = document.querySelector("[data-contact-form]");
  if (!form) return;

  function handleSubmit(event) {
    event.preventDefault();

    var honeypot = form.querySelector("[name='msg']");
    if (honeypot && honeypot.value) return;

    var status = form.querySelector("[data-form-status]");
    if (!status) return;

    status.hidden = false;
    status.textContent = "Thank you. Your message is ready, but this form is not connected to a delivery service yet.";
  }

  form.addEventListener("submit", handleSubmit);
})();
