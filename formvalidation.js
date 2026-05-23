
/* ================================================
   MONAMENG SECURITY COMPANY — FORM VALIDATION
   ------------------------------------------------
   1. validateApply()    - apply.html
   2. validateFeedback() - feedback.html
   3. runSearch()        - search bar (all pages)
   ================================================ */


/* ------------------------------------------------
   1. APPLY FORM VALIDATION
   Called by: <form onsubmit="return validateApply()">
   Checks every field and shows a specific alert
   message for whichever field is empty or invalid.
------------------------------------------------ */
function validateApply() {

  var name    = document.getElementById("name").value.trim();
  var place   = document.getElementById("place").value.trim();
  var address = document.getElementById("address").value.trim();
  var email   = document.getElementById("email").value.trim();
  var number  = document.getElementById("number").value.trim();
  var purpose = document.getElementById("purpose").value.trim();
  var service = document.querySelector('input[name="service"]:checked');

  if (name === "") {
    alert("Please enter your name.");
    return false;
  }
  if (place === "") {
    alert("Please enter your place/city.");
    return false;
  }
  if (address === "") {
    alert("Please enter your physical address.");
    return false;
  }
  if (email === "") {
    alert("Please enter your email address.");
    return false;
  }
  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    alert("Please enter a valid email address (e.g. name@mail.com).");
    return false;
  }
  if (number === "") {
    alert("Please enter your contact number.");
    return false;
  }
  if (purpose === "") {
    alert("Please enter the purpose for the service.");
    return false;
  }
  if (service === null) {
    alert("Please select a service you are applying for.");
    return false;
  }

  alert("Application submitted successfully! We will contact you within 24 hours.");
  return true;
}


/* ------------------------------------------------
   2. FEEDBACK FORM VALIDATION
   Called by: <form onsubmit="return validateFeedback()">
------------------------------------------------ */
function validateFeedback() {

  var name    = document.getElementById("names").value.trim();
  var place   = document.getElementById("location").value.trim();
  var address = document.getElementById("address").value.trim();
  var email   = document.getElementById("eamil").value.trim();
  var number  = document.getElementById("number").value.trim();
  var topic   = document.getElementById("topic").value.trim();
  var message = document.getElementById("message").value.trim();

  if (name === "") {
    alert("Please enter your full name.");
    return false;
  }
  if (place === "") {
    alert("Please enter your place/city.");
    return false;
  }
  if (address === "") {
    alert("Please enter your address.");
    return false;
  }
  if (email === "") {
    alert("Please enter your email address.");
    return false;
  }
  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    alert("Please enter a valid email address (e.g. name@mail.com).");
    return false;
  }
  if (number === "") {
    alert("Please enter your contact number.");
    return false;
  }
  if (topic === "") {
    alert("Please enter a subject for your message.");
    return false;
  }
  if (message === "") {
    alert("Please enter your message.");
    return false;
  }

  alert("Thank you for your feedback! We will get back to you soon.");
  return true;
}


/* ------------------------------------------------
   3. SEARCH BAR
   Called by: <form onsubmit="return runSearch()">
   Uses id="search-input" which every page has.
------------------------------------------------ */
function runSearch() {
  var input = document.getElementById("search-input");
  if (!input) return false;

  var query = input.value.trim();

  if (query === "") {
    alert("Please type something to search for.");
    return false;
  }

  alert("You searched for: " + query);
  input.value = "";
  return false; /* prevent page reload */
}

}
 
