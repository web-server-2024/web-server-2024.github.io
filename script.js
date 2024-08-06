function checkPassword() {
    const passwordInput = document.getElementById("password");
    const correctPassword = "Alaska";
    const linkContainer = document.getElementById("linkContainer");

    if (passwordInput.value === correctPassword) {
      linkContainer.innerHTML = '<a href="secret.html">Click...</a>';
    } else {
      linkContainer.innerHTML = 'Contraseña incorrecta.';
    }
  }