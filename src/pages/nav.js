import { home, menu, contact } from "./pageLoad.js";
import '../css/nav.css';

const render = function () {
  const contentContainer = document.querySelector("#content");

  const header = document.createElement("div");
  header.className = "header";
  
  const nav = document.createElement("ul");
  nav.className = "nav-bar";
  
  const homeLink = document.createElement("a");
  homeLink.href = "#";
  homeLink.textContent = "Home";

  const menuLink = document.createElement("a");
  menuLink.href = "#";
  menuLink.textContent = "Menu";

  const contactLink = document.createElement("a");
  contactLink.href = "#";
  contactLink.textContent = "Contact";


  homeLink.classList.add("nav-item");
  homeLink.classList.add("home-button");

  menuLink.classList.add("nav-item");
  menuLink.classList.add("menu-button");

  contactLink.classList.add("nav-item");
  contactLink.classList.add("contact-button");

  nav.appendChild(homeLink);
  nav.appendChild(menuLink);
  nav.appendChild(contactLink);

  header.appendChild(nav);
  contentContainer.appendChild(header);

  const tabs = document.querySelectorAll(".nav-item");

  console.log(tabs);

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabC = tab.innerText;
      if (tabC === "Home") home();
      if (tabC === "Menu") menu();
      if (tabC === "Contact") contact();
    });
  });
};

export { render as renderNav };
