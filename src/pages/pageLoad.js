import { renderNav } from "./nav.js";
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
import { renderContact } from "./contact.js";

const content = document.getElementById("content");



const home = function () {
  content.innerHTML = "";
  renderNav();
  renderHome();
};
const menu = function () {
  content.innerHTML = "";
  renderNav();
  renderMenu();
};
const contact = function () {
  content.innerHTML = "";
  renderNav();
  renderContact();
};

const initialize = function() {
    renderNav();
    renderHome();
}

export {home as home}
export {menu as menu}
export {contact as contact}
export {initialize as initialize}