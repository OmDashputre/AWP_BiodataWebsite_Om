// Dark/Light Theme Toggle
function toggleTheme() {
  document.body.classList.toggle("light-mode");
}

// Contact Form Validation
function validateForm() {
  let name = document.forms["contactForm"]["name"].value;
  let email = document.forms["contactForm"]["email"].value;
  if (name == "" || email == "") {
    alert("⚠️ Please fill in all required fields!");
    return false;
  }
  alert("✅ Message Sent Successfully!");
  return true;
}
