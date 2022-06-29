document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("dX097NSFRLFSZEIhk");
  const submit = document.getElementById("submit");
  submit.addEventListener("click", () => {
    const templateParams = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    emailjs
      .send("service_4kpx5bq", "template_5x64z8d", templateParams)
      .then(function (response, error) {
        const pattern =
          /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        const emailValue = templateParams.email.match(pattern);
        const nameValue = templateParams.value;
        if (emailValue !== null && nameValue !== null) {
          alert("SUCCESS!", response.status, response.text);
        } else {
          alert("FAILED...", error);
        }
      });
    /* .then(
        function (response) {
          alert("SUCCESS!", response.status, response.text);
          window.location.reload();
        },
        function (error) {
          alert("FAILED...", error);
          window.location.reload();
        }
      ); */
  });
});
