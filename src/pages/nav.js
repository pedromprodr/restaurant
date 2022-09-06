import { home, jogo, contact } from "./pageLoad.js";
import '../css/nav.css';
import Logo from '../logo.png';
//222831 , 393E46 , 00AEB5 , EEEEEE
const render = function () {
  const contentContainer = document.querySelector("#content");

  const header = document.createElement("div");
  header.className = "header";
  
  const nav = document.createElement("ul");
  nav.className = "nav-bar";
  
  const homeLink = document.createElement("a");
  homeLink.href = "#";
  homeLink.textContent = "Home";

  const jogoLink = document.createElement("a");
  jogoLink.href = "#";
  jogoLink.textContent = "O Jogo";

  const contactLink = document.createElement("a");
  contactLink.href = "#";
  contactLink.textContent = "Sobre Nós";


  homeLink.classList.add("nav-item");
  homeLink.classList.add("home-button");

  jogoLink.classList.add("nav-item");
  jogoLink.classList.add("jogo-button");

  contactLink.classList.add("nav-item");
  contactLink.classList.add("contact-button");

  const logo = new Image();
  logo.src = Logo;
  logo.classList = 'logo';

  logo.addEventListener("click", () => {home()});

  nav.appendChild(logo);
  nav.appendChild(homeLink);
  nav.appendChild(jogoLink);
  nav.appendChild(contactLink);
  header.appendChild(nav);
  contentContainer.appendChild(header);


  const tabs = document.querySelectorAll(".nav-item");
  
  console.log(tabs);

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.classList.contains('home-button'))home();
      if (tab.classList.contains('jogo-button')) jogo();
      if (tab.classList.contains('contact-button')) contact();
    });
  });
};

export { render as renderNav };
