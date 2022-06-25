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
    console.log(templateParams);

    emailjs
      .send("service_4kpx5bq", "template_5x64z8d", templateParams)
      //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)
      .then(
        function (response) {
          alert("SUCCESS!", response.status, response.text);
          window.location.reload();
        },
        function (error) {
          alert("FAILED...", error);
          window.location.reload();
        }
      );
  });
});
