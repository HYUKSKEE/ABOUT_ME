document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("dX097NSFRLFSZEIhk");
  const submit = document.querySelector(".submit");
  submit.addEventListener("click", () => {
    const templateParams = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    const pattern =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const emailValid = templateParams.email.match(pattern);
    const nameValid = templateParams.name;
    const conditional = emailValid && nameValid;
    if (conditional) {
      emailjs
        .send("service_4kpx5bq", "template_5x64z8d", templateParams)
        .then(function (response) {
          alert("SUCCESS!", response.status, response.text);
        });
    } else {
      alert("FAILED...성함 또는 이메일을 올바르게 입력해주세요.");
    }
  });
});
