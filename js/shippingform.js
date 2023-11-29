const form = document.querySelector(".shipping-form");
const firstName = document.querySelector("#shippingName");
const firstNameError = document.querySelector("#first-name-error");
const lastName = document.querySelector("#shippingLastName");
const lastNameError = document.querySelector("#last-name-error");
const shippingAddress = document.querySelector("#shippingAddress");
const shippingAddressError = document.querySelector("#address-error");
const shippingZip = document.querySelector("#shippingZip");
const shippingZipError = document.querySelector("#zip-error");
const shippingCity = document.querySelector("#shippingCity");
const shippingCityError = document.querySelector("#city-error");
const shippingCountry = document.querySelector("#shippingCountry");
const shippingCountryError = document.querySelector("#country-error");
const validateButton = document.querySelector(".validate_button");

function formValidation(event) {
  let isError = false;
  console.log(shippingCountry.value.length);

  if (!checkLength(firstName.value, 2)) {
    firstNameError.style.display = "block";
    isError = true;
  } else {
    firstNameError.style.display = "none";
  }

  if (!checkLength(lastName.value, 2)) {
    lastNameError.style.display = "block";
    isError = true;
  } else {
    lastNameError.style.display = "none";
  }

  if (!checkLength(shippingAddress.value, 2)) {
    shippingAddressError.style.display = "block";
    isError = true;
  } else {
    shippingAddressError.style.display = "none";
  }

  if (!checkZipCode(shippingZip.value)) {
    shippingZipError.style.display = "block";
    isError = true;
  } else {
    shippingZipError.style.display = "none";
  }

  if (!checkLength(shippingCity.value, 2)) {
    shippingCityError.style.display = "block";
    isError = true;
  } else {
    shippingCityError.style.display = "none";
  }

  if (!checkLength(shippingCountry.value, 2)) {
    console.log(shippingCountry.length);
    shippingCountryError.style.display = "block";
    isError = true;
  } else {
    shippingCountryError.style.display = "none";
  }

  if (isError) {
    event.preventDefault();
  } else {
    form.action = "delivery.html";
  }
 }  


form.addEventListener("submit", formValidation);

function checkLength(value, len) {
    if(value.trim().length >= len) {
        return true;
    } else {
        return false;  
    }
}

function checkZipCode(value) {
    const zipRegex = /^\d{4}$/; 
    return zipRegex.test(value);
  }