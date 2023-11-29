const deleteItem = document.querySelector("#trashCan");
const deletedMessage = document.querySelector(".delete-item");
const deletJacket = document.querySelector(".chart");
const itemsPayment = document.querySelector(".how-much");
const totaleCost = document.querySelector(".pay");

deleteItem.onclick = function() {
    deleteItem.style.display = "none";
    deletJacket.style.display = "none";
    itemsPayment.innerHTML = "<p>0kr</p>";
    totaleCost.innerHTML = "<p>0kr</p>";

    deletedMessage.innerHTML = '<div class="succsess-message" style="max-width:100%;">There are no products in your shopping cart</div>';
}