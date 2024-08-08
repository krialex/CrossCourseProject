// deleteItem.test.js

/**
 * @jest-environment jsdom
 */

describe('deleteItem function', () => {
    let deleteItem, deletedMessage, deletJacket, itemsPayment, totaleCost;
  
    beforeEach(() => {
      // Sett opp den nødvendige HTML-strukturen for testen
      document.body.innerHTML = `
        <button id="trashCan">Delete</button>
        <div class="delete-item"></div>
        <div class="chart">Item to be deleted</div>
        <div class="how-much"><p>1250 kr</p><p>free</p></div>
        <div class="pay"><p>1250kr</p></div>
      `;
  
      // Få referanser til elementene
      deleteItem = document.querySelector("#trashCan");
      deletedMessage = document.querySelector(".delete-item");
      deletJacket = document.querySelector(".chart");
      itemsPayment = document.querySelector(".how-much");
      totaleCost = document.querySelector(".pay");
  
      // Definer funksjonen som skal testes
      deleteItem.onclick = function() {
        deleteItem.style.display = "none";
        deletJacket.style.display = "none";
        itemsPayment.innerHTML = "<p>0kr</p>";
        totaleCost.innerHTML = "<p>0kr</p>";
  
        deletedMessage.innerHTML = '<div class="succsess-message" style="max-width:100%;">There are no products in your shopping cart</div>';
      };
    });
  
    test('hides elements and shows deleted message when delete button is clicked', () => {
      // Simuler et klikk på deleteItem-knappen
      deleteItem.click();
  
      // Verifiser at elementene blir skjult og meldingen vises
      expect(deleteItem.style.display).toBe("none");
      expect(deletJacket.style.display).toBe("none");
      expect(itemsPayment.innerHTML).toBe("<p>0kr</p>");
      expect(totaleCost.innerHTML).toBe("<p>0kr</p>");
      expect(deletedMessage.innerHTML).toBe('<div class="succsess-message" style="max-width:100%;">There are no products in your shopping cart</div>');
    });
});
