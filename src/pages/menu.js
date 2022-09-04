const render = function(){
    const contentContainer = document.querySelector("#content");

    const menuContainer = document.createElement("div");
    menuContainer.className = "homeContainer";
    menuContainer.textContent = "snar";
    contentContainer.appendChild(menuContainer);
}

export {render as renderMenu}