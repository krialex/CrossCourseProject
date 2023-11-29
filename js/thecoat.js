/* Size opitons */ /*
const sizeOptions = document.querySelectorAll(".size-options");

for (let i = 0; i < sizeOptions.length; i++) {
  sizeOptions[i].addEventListener("click", function() {
    const selectedOptions = document.querySelector(".selected");
      if (selectedOptions) {
        selectedOptions.classList.remove("selected");
      }
      this.classList.add("selected");
  });
};


/* Byttet til Radio-buttons og fikset opp i problemet med en CSS class

const sizeOptions = document.querySelectorAll(".size-options");

for (let i = 0; i < sizeOptions.length; i++) {
  sizeOptions[i].addEventListener("click", function() {
    if (this.previousElementSibling.checked) {
      this.style.color = "white";
      this.style.backgroundColor = "#9CC1D9";
    } else {
      this.style.color = "black";
      this.style.backgroundColor = "white";
    }
  });
}; */

/* Add to chart animation */ 
let clickCount = 1;

const cartButton = document.querySelector(".chart_button");
const cartNumber = document.getElementById("cartNumber");

cartButton.onclick = function() {
    cartButton.classList.add("clicked");

    cartNumber.textContent = clickCount;

    clickCount++;
};



 

/*Get api images and information + size*/
const detailsContainer = document.querySelector(".specific-product");

const dropDownOne = document.querySelector(".dbtn1");
const dropDownContent = document.querySelector("#mydropdown1");
const dropDownThree = document.querySelector(".dbtn3");
const dropDownContentThree = document.querySelector("#mydropdown3");


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url = `https://www.unipop.no/headlesswp/wp-json/wc/v3/products/` + id + `?consumer_key=ck_44960bbaf982d8c82546750083dc6029a6b14d93&consumer_secret=cs_96e14cc49a1a2bb7cf8926faff0d5a13b672fd95`;



async function getDetails(url) {
    try {
      const respons = await fetch(url);
      const result = await respons.json();
      
      console.log(result);

        const productImageSrc = result.images.length > 0 ? result.images[0].src : '';

        let productSizeOptions = '';

        for (let i = 0; i < result.attributes.length; i++) {
          const attributeName = result.attributes[i].name;
          const attributeOptions = result.attributes[i].options;

          for (let y = 0; y < attributeOptions.length; y++) {
            const attributeOption = attributeOptions[y];
            productSizeOptions += `<option value="${attributeOption}">${attributeOption}</option>`;
          }
        }
        
        
        detailsContainer.innerHTML += `<div><h1 class="h1-black">${result.name}</h1>
                                      <img class="product-pic" src="${productImageSrc}"></div>
                                      <div class="about_product"><p>${result.short_description}</p>
                                      <p>${result.price_html}</p>
                                      <div><lable for="size">Size: </lable>
                                      <select name="size">${productSizeOptions}</select></div></div>`;

        const sizeImg = result.images.length > 1 ? result.images[1].src : '';
console.log(sizeImg);
        
        dropDownContent.innerHTML = ""; 
        dropDownOne.onclick = function() {
          hideAllDropDowns();
          dropDownContent.innerHTML = `<div class="dropdown-content">${result.description}</div>`;
          }; 
        dropDownContentThree.innerHTML = ""; 

        dropDownThree.onclick = function() {
            hideAllDropDowns();
        dropDownContentThree.innerHTML = `<div class="dropdown-content"><img src="${sizeImg}" style="width:         100%; height: 100%;">
                                             </div>`;
        };


         
        } catch(error) {
            console.log(error);
      }  
  }
getDetails(url);
function hideAllDropDowns() {
  dropDownContent.innerHTML = ""; 
  dropDownContentThree.innerHTML = "";
}






/* Dropdown info */ /*
const dropDownOne = document.querySelector(".dbtn1");
const dropDownContent = document.querySelector("#mydropdown1");
const dropDownTwo = document.querySelector(".dbtn2");
const dropDownContentTwo = document.querySelector("#mydropdown2");
const dropDownThree = document.querySelector(".dbtn3");
const dropDownContentThree = document.querySelector("#mydropdown3");

dropDownContent.innerHTML = ""; 

dropDownOne.onclick = function() {
    hideAllDropDowns();
    dropDownContent.innerHTML = `<div class="dropdown-content">
                                    <p>The water-repellent surface has been technologically researched to find the perfect balance of air and water-repellent to give our users the best possible experience on a trip in nature.</p></div>`;
};  

/* dropDownContentTwo.innerHTML = ""; 

dropDownTwo.onclick = function() {
    hideAllDropDowns();
    dropDownContentTwo.innerHTML = `<div class="dropdown-content">
                                    <p>This is a jacket that warms on cooler days and keeps you dry in light rain showers.</p></div>`;
}; 

dropDownContentThree.innerHTML = ""; 

dropDownThree.onclick = function() {
    hideAllDropDowns();
    dropDownContentThree.innerHTML = `<div class="dropdown-content">
                                    <p>Lorem ipsum dipsum tootdi this is a normale size jacket.</p></div>`;
};

function hideAllDropDowns() {
    dropDownContent.innerHTML = "";
   /* dropDownContentTwo.innerHTML = ""; 
    dropDownContentThree.innerHTML = "";
}
*/
     

