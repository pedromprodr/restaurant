const card = function(name, email, phone){
    let c = document.createElement('div');
    c.className='cardContainer';
    const nameD = document.createElement('h3');
    nameD.textContent = name;
    const emailD = document.createElement('h3');
    emailD.textContent = email;
    const phoneD = document.createElement('h3');
    phoneD.textContent = phone;
    c.appendChild(nameD);
    c.appendChild(emailD);
    c.appendChild(phoneD);
    return c;
}

const render = function(){
    const contentContainer = document.querySelector("#content");

    const title = document.createElement('h1');
    title.textContent = 'A nossa aldeia.';
    
    contentContainer.appendChild(title);

    contentContainer.appendChild(card('Pedro Rodrigues','pedromprodr@gmail.com','+351 960 000 000'));
    contentContainer.appendChild(card('Marco Garcia','marcog123@gmail.com','+351 960 000 001'));
    contentContainer.appendChild(card('Maria Marquês','mmarques@gmail.com','+351 960 000 002'));

}

export {render as renderContact}