export const greeting = "Welcome to The Girlclass Restaurant!";
export function newContent() {
    const contentContainer = document.querySelector("#content");
    contentContainer.textContent = "";
    
    const restaurantImageWrapper = document.createElement("div");
    restaurantImageWrapper.classList.add("restaurantImageWrapper");
    const restaurantImage = document.createElement("div");
    restaurantImage.classList.add("restaurantImage");

    const restaurantInfo = document.createElement("div");
    restaurantInfo.classList.add("restaurantInfo");

    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurantName");
    restaurantName.textContent = "The Girlclass Restaurant";

    const restaurantIntro = document.createElement("p");
    restaurantIntro.classList.add("restaurantIntro");
    restaurantIntro.textContent = "Located on the 101th floor with sweeping views of GirlClass Harbour, this all-day drinks and dining space has three distinctive bar experiences, a drawing room, a curio lounge and a leading culinary team that delivers the highest quality Japanese ingredients and traditional cooking techniques."

    restaurantInfo.appendChild(restaurantName);
    restaurantInfo.appendChild(restaurantIntro);
    restaurantImageWrapper.appendChild(restaurantImage);
    contentContainer.appendChild(restaurantImageWrapper);
    contentContainer.appendChild(restaurantInfo);
}