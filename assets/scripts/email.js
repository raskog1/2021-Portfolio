const form = document.getElementById("contact-form");

const formEvent = form.addEventListener("submit", function (e) {
  e.preventDefault();

  let mail = new FormData(form);

  sendMail(mail);
});

function sendMail(mail) {
  // fetch("/send", {
  //   method: "post",
  //   body: mail,
  // }).then((response) => {
  document.getElementById("contact-submit").textContent = "thank you.";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";

  setTimeout(() => {
    document.getElementById("contact-submit").textContent = "submit.";
  }, 8000);
  return response.json();
  // });
}
