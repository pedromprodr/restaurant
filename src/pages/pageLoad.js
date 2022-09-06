import { renderNav } from "./nav.js";
import { renderHome } from "./home.js";
import { renderJogo } from "./jogo.js";
import { renderContact } from "./contact.js";


const home = function () {
  document.getElementById("content").innerHTML = "";
  renderNav();
  renderHome();
};
const jogo = function () {
  document.getElementById("content").innerHTML = "";
  renderNav();
  renderJogo();
};
const contact = function () {
  document.getElementById("content").innerHTML = "";
  renderNav();
  renderContact();
};

const initialize = function() {
    renderNav();
    renderHome();
}

export {home as home}
export {jogo as jogo}
export {contact as contact}
export {initialize as initialize}