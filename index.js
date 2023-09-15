function validateForm() {

  const fullName = document.forms["signup"]["fname"].value;

  if (fullName = "") {
    document.getElementById("nameError").innerHTML =
      "Please Enter Full Name";

    return false;
  }

  const emailid = document.forms["signup"]["email"].value;

  if (emailid == "") {
    document.getElementById("emailError").innerHTML =
      "Please Enter Valid Email Id";

    return false;
  }
  const password = document.forms["signup"]["password"].value;

  if (password == "") {
    document.getElementById("passwordError").innerHTML =
      "Please Enter Valid Password";

    return false;
  }

  const conPass = document.forms["signup"]["confirmPassword"].value;

  if (conPass != password) {
    document.getElementById("conPassError").innerHTML =
      "Password not matching";

    return false;
  }
}
