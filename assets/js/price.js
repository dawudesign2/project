(function () {

    const content = [
        {
            src : 'assets/img/aa.jpeg',
            hdl : 'Title',
            txt: "Treat yourself to one of our signature services.You’ll leave looking and feeling better than ever before.",
            dir : 'about.html'
        },
        {
            src : 'assets/img/bb.jpeg',
            hdl : 'Title2',
            txt: "Treat yourself to one of our signature services.You’ll leave looking and feeling better than ever before.",
            dir : 'about.html'
        }
    ]


    const price = document.querySelector('.pricing');

    // creation d'une div container 
    const container = document.createElement('div');
    container.classList.add('cards');
    price.appendChild(container);

    const cards = (src, hdl, txt, dir) => {
        const card = document.createElement('div');
        card.classList.add('card');
        container.appendChild(card);

        const img = document.createElement('img');
        img.src = src;
        img.alt = 'card img';
        card.appendChild(img);

        const cardBody = document.createElement('div');
        cardBody.classList.add('cardContent');
        card.appendChild(cardBody);

        const title = document.createElement('h3');
        title.textContent = hdl;
        cardBody.appendChild(title);

        const text = document.createElement('p');
        text.textContent = txt;
        cardBody.appendChild(text);

        const button = document.createElement('a');
        button.classList.add('btn');
        button.textContent = 'Learn more';
        button.href = dir;
        cardBody.appendChild(button);
    }

    content.forEach(str => {
        cards(str.src, str.hdl, str.txt, str.dir);
    });

})();