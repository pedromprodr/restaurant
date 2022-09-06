import I2 from '../i2.png';
import I3 from '../i3.jpg';

const render = function(){
    const contentContainer = document.querySelector("#content");

    const jogoContainer = document.createElement("div");
    jogoContainer.className = "jogoContainer";

    const i2 = new Image();
    i2.src = I2;
    i2.className = 'i2';
    jogoContainer.appendChild(i2);


    let text = document.createElement('h1');
    text.className = "jogoText";
    text.textContent = 'A Aldeia Embebeda-se é um jogo que dá um twist ao clássico A Aldeia Adormece, tornando-o um jogo de bebida extremamente divertido.';
    jogoContainer.appendChild(text);


    let text2 = document.createElement('h1');
    text2.className = "jogoText";
    text2.textContent = 'Junta um grupo de até 16 amigos num jogo que nunca é igual ao anterior, isto graças à expansão de Grande Aldeia que vem incluída de forma gratuita com o Jogo Base.';
    jogoContainer.appendChild(text2);

    const i3 = new Image();
    i3.src = I3;
    i3.className = 'i2';
    jogoContainer.appendChild(i3);
    
    contentContainer.appendChild(jogoContainer);
}

export {render as renderJogo}