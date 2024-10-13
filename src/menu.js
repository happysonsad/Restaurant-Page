export function menu() {
    
    const contentContainer = document.querySelector("#content");

    contentContainer.textContent = "";

    const menuWrapper = document.createElement("section");
    menuWrapper.classList.add("menuWrapper");

    const menu = document.createElement("div");
    menu.classList.add("menu");

    const menuHeading = document.createElement("p");
    menuHeading.classList.add("menuHeading");
    menuHeading.textContent = "Izakaya Menu"

    const menuAppetizer1 = document.createElement("p");
    menuAppetizer1.classList.add("menuAppetizerOne");
    menuAppetizer1.textContent = "Signature Oyster";
    const menuAppetizer2 = document.createElement("p");
    menuAppetizer2.classList.add("menuAppetizerTwo");
    menuAppetizer2.textContent = "A4 Miyazaki Wag yu Sando";

    const menuMain1 = document.createElement("p");
    menuMain1.classList.add("menuMain");
    menuMain1.textContent = "Sustainable Miso Glazed Black Cod";
    const menuMain2 = document.createElement("p");
    menuMain2.classList.add("menuMain");
    menuMain2.textContent = "Mushroom Fried Rice";
    const menuMain3 = document.createElement("p");
    menuMain3.classList.add("menuMain");
    menuMain3.classList.add("menuMainEnd");
    menuMain3.textContent = "Miso Glazed Eggplant";

    const menuDessert = document.createElement("p");
    menuDessert.classList.add("menuDessert");
    menuDessert.textContent = "White Miso Souffle";
    const menuDessertInfo = document.createElement("p");
    menuDessertInfo.classList.add("menuDessertInfo");
    menuDessertInfo.textContent = "Coconut ice cream, citrus curd";

    const price1 = document.createElement("p");
    price1.classList.add("price");
    price1.textContent = "$1300 per person, minimum 2pax";

    const price2 = document.createElement("p");
    price2.classList.add("priceSurcharge");
    price2.textContent = "Plus 10% surcharge";


    const ingredientsInfo1 = document.createElement("p");
    ingredientsInfo1.classList.add("ingredientsInfo");
    ingredientsInfo1.textContent = "Where available, our ingredients are from";

    const ingredientsInfo2 = document.createElement("p");
    ingredientsInfo2.classList.add("ingredientsInfo");
    ingredientsInfo2.classList.add("ingredientsInfoEnd");
    ingredientsInfo2.textContent = "sustainable sources and ethical farms";


    menuWrapper.appendChild(menu);
    menu.appendChild(menuHeading);
    menu.appendChild(menuAppetizer1);
    menu.appendChild(menuAppetizer2);
    menu.appendChild(menuMain1);
    menu.appendChild(menuMain2);
    menu.appendChild(menuMain3);
    menu.appendChild(menuDessert);
    menu.appendChild(menuDessertInfo);
    menu.appendChild(price1);
    menu.appendChild(price2);
    menu.appendChild(ingredientsInfo1);
    menu.appendChild(ingredientsInfo2);

    contentContainer.appendChild(menuWrapper);
}