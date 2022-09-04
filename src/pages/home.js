const render = function(){
    const contentContainer = document.querySelector("#content");

    const homeContainer = document.createElement("div");
    homeContainer.className = "homeContainer";
    homeContainer.textContent = "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corrupti quibusdam inventore dicta. Libero vero iste, atque tempora quae earum ipsam cum repudiandae, praesentium sit magni! Deleniti assumenda architecto velit beatae voluptates soluta corporis, accusantium vitae ullam, eos, vero inventore tenetur. Ea doloribus ipsam nisi corporis? Illum laborum maxime iusto! Pariatur fugit culpa vel! Pariatur aperiam voluptate aliquam. Nostrum, maiores ipsa optio veniam dolor maxime dolores beatae ex voluptatibus eum fugit quo vitae quisquam deserunt neque aliquid ducimus quasi laborum architecto quis ab ea? Fugit quod qui dolores. Perspiciatis minus possimus quidem aliquid, doloribus harum iusto non ea laborum.";
    contentContainer.appendChild(homeContainer);
}

export {render as renderHome}