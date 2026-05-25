
  /* APPLY FORM VALIDATION
   Checks all fields are filled and a service
   is selected before allowing submit.
------------------------------------------------ */
 
function validateApply() {
 
  /* Get the values from each input field */
  var name    = document.getElementById("name").value;
  var place   = document.getElementById("place").value;
  var address = document.getElementById("address").value;
  var email   = document.getElementById("email").value;
  var number  = document.getElementById("number").value;
  var purpose = document.getElementById("purpose").value;
 
  /* Get the selected radio button for service */
  var service = document.querySelector('input[name="service"]:checked');
 
  /* Check if any text field is empty */
  if (name === "") {
    alert("Please enter your name.");
    return false; /* stops the form from submitting */
  }
 
  if (place === "") {
    alert("Please enter your place.");
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
 
  /* Basic email check: must contain @ and a dot */
  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    alert("Please enter a valid email address.");
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
 
  /* Check that a service radio button is selected */
  if (service === null) {
    alert("Please select a service you are applying for.");
    return false;
  }
 
  /* If everything is fine, show success message */
  alert("Application submitted successfully! We will contact you within 24 hours.");
  return true; /* allows the form to submit */
}
 
 
/* 
   FEEDBACK FORM VALIDATION
   Checks all fields are filled before submitting */
 
function validateFeedback() {
 
  /* Get the values from each input field */
  var name    = document.getElementById("names").value;
  var place   = document.getElementById("location").value;
  var address = document.getElementById("address").value;
  var email   = document.getElementById("eamil").value;
  var number  = document.getElementById("number").value;
  var topic   = document.getElementById("topic").value;
  var message = document.getElementById("message").value;
 
  /* Check each field one by one */
  if (name === "") {
    alert("Please enter your full name.");
    return false;
  }
 
  if (place === "") {
    alert("Please enter your place.");
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
 
  /* Basic email check: must contain @ and a dot */
  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    alert("Please enter a valid email address.");
    return false;
  }
 
  if (number === "") {
    alert("Please enter your contact number.");
    return false;
  }
 
  if (topic === "") {
    alert("Please enter a subject.");
    return false;
  }
 
  if (message === "") {
    alert("Please enter your message.");
    return false;
  }
 
  /* If everything is fine, show success message */
  alert("Thank you for your feedback! We will get back to you soon.");
  return true;
}
 
 
/*
   SEARCH BAR
   When the user clicks Search or presses Enter,
   it checks the box is not empty then shows
   a simple result message. */
 
/* Wait for the page to fully load before running */
window.onload = function () {
 
  /* Get the search input and button from the page */
  var searchInput  = document.getElementById("searchInput");
  var searchButton = document.getElementById("searchButton");
 
  /* Only run if search elements exist on this page */
  if (searchInput && searchButton) {
 
    /* When the Search button is clicked */
    searchButton.onclick = function () {
      runSearch();
    };
 
    /* Also allow pressing the Enter key to search */
    searchInput.onkeydown = function (event) {
      if (event.key === "Enter") {
        runSearch();
      }
    };
  }
};
 
/* The actual search function */
function runSearch() {
  var searchInput = document.getElementById("search-input");
  var query = searchInput.value; /* get what the user typed */
 
  /* Check the search box is not empty */
  if (query === "") {
    alert("Please type something to search.");
    return;
  }
 
  /* Show what was searched (basic feedback to the user) */
  alert("You searched for: " + query);
 
  /* Clear the search box after searching */
  searchInput.value = "";
}
 