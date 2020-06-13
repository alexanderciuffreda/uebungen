// Klassen
//Represents a single Wish
class Wish {
  #myWish = null;

  constructor(aWish) {
    this.#myWish = aWish;
  }

  getName() {
    return this.#myWish;
  }
}

//Represents a list of Wish-Objects
class Wishlist {
  #myName = null;
  #myWishes = [];

  constructor(aName) {
    this.#myName = aName;
  }

  addWish(aWish) {
    this.#myWishes.push(aWish);
    document.dispatchEvent(wishAddedEvent);
  }

  getName() {
    return this.#myName;
  }

  getWishes() {
    return this.#myWishes;
  }

  printWishes() {
    console.log(this.#myName);
    this.#myWishes.forEach((wish) => {
      console.log(wish.getName());
    });
  }
}

// Funktionen
function createWishcard(aWish) {
  var div1 = document.createElement("div");
  div1.className = "col s12 m6 l3";
  var div2 = document.createElement("div");
  div2.className = "card-panel blue";
  var span = document.createElement("span");
  span.className = "white-text";
  span.innerHTML = aWish.getName();
  var shadow = document.createElement("p");
  shadow.className = "z-depth-2";

  div1.appendChild(shadow);
  shadow.appendChild(div2);
  div2.appendChild(span);

  document.getElementById("wishlist-entrypoint").appendChild(div1);
}

function btnNewWishClick() {
  window.alert("btnNewWishClick()");
  list.addWish(new Wish(document.getElementById("newwish-textarea").value));
  renderWishlist(list);
}

function renderWishlist(aWishlist) {
  // Clear existing Wishes from DOM before render updated list
  const parent = document.getElementById("wishlist-entrypoint");
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
  // Add Wishes to DOM
  document.getElementById("wishlist-name").textContent = aWishlist.getName();
  aWishlist.getWishes().forEach((element) => createWishcard(element));
}

function initEventListeners(e) {
  window.alert("init Event Listeners");

  //document.getElementByid("btnNewWish").addEventListener("click", btnNewWishClick);

  if (typeof list != "object") { // check if list already exists
    // list does not exist, create new list

    /*
    const list = new Wishlist("Birthday wishes of Christoph");
  list.addWish(new Wish("Gibson Les Paul 69 Custom"));
  list.addWish(new Wish("Fender Telecaster Thinline"));
  list.addWish(new Wish("Gretsch Electromatic Center Block"));
  list.addWish(new Wish("Orange Rocker 15 head-only"));
  list.addWish(new Wish('Orange 2x12" Speaker Cabinet'));
  list.addWish(new Wish("Electro-Harmonix Oceans 11 Reverb"));
  list.addWish(new Wish("Boss Chorus"));
  renderWishlist(list);

    */
  } // List exists, do nothing just render the list

  renderWishlist(list);
}

function initList() {
  window.alert("initList()")
  const list = new Wishlist("Birthday wishes of Christoph");
  list.addWish(new Wish("Gibson Les Paul 69 Custom"));
  list.addWish(new Wish("Fender Telecaster Thinline"));
  list.addWish(new Wish("Gretsch Electromatic Center Block"));
  list.addWish(new Wish("Orange Rocker 15 head-only"));
  list.addWish(new Wish('Orange 2x12" Speaker Cabinet'));
  list.addWish(new Wish("Electro-Harmonix Oceans 11 Reverb"));
  list.addWish(new Wish("Boss Chorus"));
  renderWishlist(list);
}

// Events
var wishAddedEvent = new CustomEvent("wish-added");
document.getElementById("btnInitWishes").addEventListener("click", initList);
//window.addEventListener("load", initEventListeners, false);
document.getElementById("btnNewWish");
//document.addEventListener("click", btnNewWishClick);
document.addEventListener("wishAdded", function (e) {
  renderWishlist(list);
});

