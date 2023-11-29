const url = "https://f80da321-3630-41bd-8628-2db1bd37ddaf.mock.pstmn.io";
const zipCodeInput = document.querySelector("#shippingZip");
const cityInput = document.querySelector("#shippingCity");

async function getCityByZipCode(zipCode) {
  try {
    const response = await fetch(`${url}`);
    const data = await response.json();

    for (let key in data) {
        
        if (key === zipCode) {
            cityInput.value = data[key];
            break;
          }
    }


  } catch (error) {
    console.log(error);
  }
}

zipCodeInput.addEventListener("input", function (event) {
  const zipCode = event.target.value;
  getCityByZipCode(zipCode);
});
