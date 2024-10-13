export function about() {
    const contentContainer = document.querySelector("#content");

    contentContainer.textContent = "";

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("aboutContainer");

    const aboutText = document.createElement("p");
    aboutText.classList.add("aboutText");
    aboutText.textContent = "The Girlclass Restaurant is founded by Tingor since 2012.";

    aboutContainer.appendChild(aboutText);
    contentContainer.appendChild(aboutContainer);
}