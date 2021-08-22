const form = document.getElementById("contact-form");

const formEvent = form.addEventListener("submit", function (e) {
  e.preventDefault();

  let mail = new FormData(form);

  console.log(mail);
  sendMail(mail);
});

function sendMail(mail) {
  fetch("https://ancient-dusk-97528.herokuapp.com/send", {
    method: "post",
    body: mail,
  }).then((response) => {
    return response.json();
  });
}
