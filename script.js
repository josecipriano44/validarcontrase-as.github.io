function validarPassword() {
    const passwordInput = document.getElementById("passwordInput").value;
    const message = document.getElementById("message");
  
    // Expresión regular para la validación de contraseña
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  
    if (regex.test(passwordInput)) {
      message.textContent = "Contraseña válida. 🎉";
      message.className = "success";
    } else {
      message.textContent = "Contraseña no válida. ❌";
      message.className = "error";
    }
  }
  