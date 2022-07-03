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

    console.log(sendEmail(templateParams));
    const pattern =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const emailValid = templateParams.email.match(pattern);
    const nameValid = templateParams.name;
    const conditional = emailValid && nameValid;
    if (conditional) {
      sendEmail(templateParams).then((response) => {
        alert("SUCCESS!", response.status, response.text);
      });
    } else {
      alert("FAILED...성함 또는 이메일을 올바르게 입력해주세요.");
    }
  });
});

async function sendEmail(templateParam) {
  const response = await emailjs.send(
    "service_4kpx5bq",
    "template_5x64z8d",
    templateParam
  );
  return response;
  s;
}

// const [data, setData] = useState('초기값');
// sendEmail(어쩌구).then(res => res.json()).then(data => setData(data))
// sendEmail(어쩌구).then(res => res.json()).then(setData)
