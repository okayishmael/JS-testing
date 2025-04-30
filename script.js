// --------------------------
// Random Message Generator
// ------------------------

function generateRandomMessage() {
  const messages = [
    "Stay focused and never give up!",
    "Believe in yourself!",
    "Every day is a second chance.",
    "Push yourself, because no one else is going to do it for you.",
    "You can do it!",
    "Sart where you are with what you have. You're enough!",
    "There are no mistakes, only opportunities",
    "Be happy with the beautiful things that make you, you.",
    "I am not a has-been. I am a will be.",
    "Rise above the odds with a brand new sun.",
  ];

  // Select a random message
  let randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

// Example of function call
let randomMessage = generateRandomMessage();

// Printing the result

document.getElementById("random-msg").innerHTML = randomMessage;

// -------------------------
// Display data based on selection using switch()
// ---------------------------

function displayMessage() {
  var selectElement = document.getElementById("types-of-cars");
  var selectedValue = selectElement.value;

  var message = "";

  switch (selectedValue) {
    case "flat":
      message = "Flat- contents. ";
      break;
    case "saab":
      message = " Saab contents";

      break;
    case "bmw":
      message = "BMW contents";
      break;

    case "benz":
      message = "Benz contents";
      break;

    case "honda":
      message = "Honda contents";
      break;
    default:
      message = "Please select an option.";
  }

  document.getElementById("selected-car-info").innerHTML = message;
}

// ----------------------------
//  Get discount
// --------------------------
function calculateDiscount() {
  let originalPrice = 150; // Original price of the product
  let discountInput = parseFloat(
    document.getElementById("discount-demo").value
  ); // Discount percentage (20%)
  let correctDiscount = 20;
  if (isNaN(discountInput)) {
    alert("Please enter valid numbers.");
    return;
  }
  //  the math
  let salePrice = originalPrice - (originalPrice * discountInput) / 100;

  if (discountInput === correctDiscount) {
    // Display discount price
    document.getElementById("discount-stage").innerHTML =
      " The sale price is $" + salePrice + ".";
  } else {
    alert("Discount not valid. Must be 20");
  }

  // Printing the result
  console.log("Original Price: $" + salePrice);
}
// First 20% discount Code ends
//--------------------------------

// ----------------------------
//  Get discount using letters code
// --------------------------
function birthdayDiscount() {
  let originalPrice2 = 2000; // Original price of the product
  let discount2 = 20;
  let discountInput2 = document.getElementById("discount-demo2").value; // Discount percentage (20%)
  let correctDiscount2 = "bday20";

  //  the math
  let bdaySalePrice2 = originalPrice2 - (originalPrice2 * discount2) / 100;

  if (discountInput2 === correctDiscount2) {
    // Display discount price
    document.getElementById("discount-stage2").innerHTML =
      " The sale price is $" + bdaySalePrice2 + ".";
  } else {
    alert("Discount not valid.");
  }

  // Printing the result
  console.log("Original Price: $" + bdaySalePrice2);
}

// discount letter code ends
//---------------------------------

// ---------------
// select a country and show its capital
// ----------------------------

const countries = [
  { name: "Liberia", capital: "Monrovia" },
  { name: "Ghana", capital: "Accra" },
  { name: "Senegal", capital: "Dakar" },
  // ... more countries
];

const countrySelect = document.getElementById("countrySelect"); // Assuming you have a select element with this ID
const capitalDisplay = document.getElementById("capitalDisplay"); // Assuming you have an element to display the capital

countrySelect.addEventListener("change", function () {
  const selectedCountry = countrySelect.value;
  const country = countries.find((c) => c.name === selectedCountry);

  if (country) {
    capitalDisplay.textContent = country.capital;
  } else {
    capitalDisplay.textContent = "Capital not found";
  }
});
// countries and capital code ends
//-----------------------------

// -------------------------------
// Multiplying 2 number and displaying answer
// ------------------------------

function multiplyInput() {
  // get and store user inputs
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  // Check if the input values are numbers
  if (isNaN(num1, num2)) {
    alert("Please enter valid numbers.");
    return;
  }
  //  the math
  let answer = num1 * num2;

  //  Display the answer.
  document.getElementById("answer-stage").innerHTML =
    " The answer is " + answer + ".";
  /* Note: Add onclick ="multiplyInput()" to submit button in the HTML */
}

// -----------------------------------
// Greeting based on the time of the day
// -----------------------------------

var nameEntered = "";

function send() {
  var words = document.getElementById("nameEntered").value;
  document.getElementById("stage").innerHTML = greeting + " " + words + "!";

  document.getElementById("nameEntered").value = "";
}

function getGreeting() {
  const now = new Date();
  const hours = now.getHours();

  if (hours < 12) {
    return "Good morning";
  } else if (hours < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}

const greeting = getGreeting();
console.log(greeting);
// Output: Good afternoon (if the current time is between 12 PM and 6 PM)
/*
  Google: get input value JavaScript
  */

function dothemath(a, b) {
  return a * b;
}
console.log(dothemath(4, 5));

//=============================
//CREDIT CARD FORM
//================================

function validateForm(event) {
  event.preventDefault(); // Prevent the form from submitting immediately

  // Get form elements

  const cardNumber = document.getElementById("cardnumber").value;

  const cardHolder = document.getElementById("cardHolder").value;

  const expMonth = document.getElementById("exp-month").value;

  const expYear = document.getElementById("exp-year").value;

  const cvvNumber = document.getElementById("cvvnumber").value;

  // Reset error displays

  document.getElementById("cardnumber-error").innerHTML = "";

  document.getElementById("cardHolder-error").innerHTML = "";

  document.getElementById("exp-date-error").innerHTML = "";

  document.getElementById("cvv-error").innerHTML = "";

  // Reset validation flag

  let isValid = true;

  // Validate Card Number (16 digits)

  if (!/^\d{16}$/.test(cardNumber)) {
    document.getElementById("cardnumber-error").innerHTML =
      "Card number must be exactly 16 digits.";

    isValid = false;
  }

  // Validate Card Holder

  if (cardHolder.trim() === "") {
    document.getElementById("cardHolder-error").innerHTML =
      "Card holder name cannot be empty.";

    isValid = false;
  }

  // Validate Expiration Date

  const currentDate = new Date();

  const selectedDate = new Date(expYear, expMonth - 1); // Month is 0-indexed

  if (selectedDate < currentDate) {
    document.getElementById("exp-date-error").innerHTML =
      "Expiration date must be in the future.";

    isValid = false;
  }

  // Validate CVV (3 or 4 digits)

  if (!/^\d{3,4}$/.test(cvvNumber)) {
    document.getElementById("cvv-error").innerHTML =
      "CVV must be 3 or 4 digits.";

    isValid = false;
  }

  // If everything is valid

  if (isValid) {
    alert("Form submitted successfully!"); // Replace with form submission logic
  }
}
