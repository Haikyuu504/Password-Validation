function validatePassword() {
  let password = document.getElementById("password").value;
  let messageElement = document.getElementById("message");

  if (password == "") {
    messageElement.innerHTML = "Warning: Please Fill Up Form";
    messageElement.style.color = "red";
    return false;
  }
  if (password.length < 8) {
    messageElement.innerHTML = "Warning: Password Length Must Be 8 Characters";
    messageElement.style.color = "red";
    return false;
  } else {
    messageElement.innerHTML = "Success: Password is Valid";
    messageElement.style.color = "green";
    return false;
  }
}
