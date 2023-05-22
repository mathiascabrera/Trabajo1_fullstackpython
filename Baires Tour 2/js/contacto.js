function SendEmail() {
  let name = document.querySelector("#name").value;
  let lastName = document.querySelector("#lastName").value;
  let dni = document.querySelector("#dni").value;
  let email = document.querySelector("#email").value;
  let message = document.querySelector("#message").value;

  let isEmpty =
    name === "" ||
    lastName === "" ||
    dni === "" ||
    email === "" ||
    message === "";

  if (isEmpty) {
    document.querySelector(".msg").removeAttribute("hidden");
    document.querySelector(".success").innerHTML = "";
    return;
  }

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    mode: "cors",
    body: "Mega Baires Tour",
  }).then((response) => {
    if (response.status === 201) {
      document.querySelector(".msg").setAttribute("hidden", "");
      document.querySelector(".success").innerHTML =
        "Tu mensaje ha sido enviado, te contestaremos pronto a " + email;
    }
  });
}
