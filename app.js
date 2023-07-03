// Récupérartion des différents éléments en Javascript
const eye = document.querySelector(".fa-eye");
const eyeOff = document.querySelector(".fa-eye-slash");
const passwordInput = document.querySelector(".password");

// Ecoute de l'évènement "click" sur l'icone eye
eye.addEventListener("click", () => {
  eye.style.display = "none";
  eyeOff.style.display = "block";
  passwordInput.type = "text";
});

// Ecoute de l'évènement "click" sur l'icone eye off
eyeOff.addEventListener("click", () => {
  eyeOff.style.display = "none";
  eye.style.display = "block";
  passwordInput.type = "password";
});
