const form = document.getElementById("contact-form");

const formEvent = form.addEventListener("submit", function (e) {
  e.preventDefault();

  let mail = new FormData(form);

  console.log(mail);
  sendMail(mail);
});

function sendMail(mail) {
  fetch("https://nodemailer-vic-lo.herokuapp.com/send", {
    method: "post",
    body: mail,
  }).then((response) => {
    return response.json();
  });
}
