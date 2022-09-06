import I1 from '../i1.png';

const render = function(){
    const contentContainer = document.querySelector("#content");

   

    const i1 = new Image();
    i1.src = I1;
    i1.className = 'i1';
  
    contentContainer.appendChild(i1);

    const homeContainer = document.createElement("div");
    homeContainer.className = "homeContainer";
    homeContainer.textContent = "DISPONÍVEL NO FINAL DE 2023";
    contentContainer.appendChild(homeContainer);

}

export {render as renderHome}