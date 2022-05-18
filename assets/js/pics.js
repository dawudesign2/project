(function(){
    const picture = [
         "assets/img/portfolio/pexels-anna-shvets-3851669.jpeg",
         "assets/img/portfolio/pexels-anna-shvets-3851905.jpeg",
         "assets/img/portfolio/pexels-elina-fairytale-3865546.jpeg",
         "assets/img/portfolio/pexels-elina-fairytale-3865548.jpeg",
         "assets/img/portfolio/pexels-elina-fairytale-3865560.jpeg",
         "assets/img/portfolio/pexels-linda-prebreza-286951.jpeg"
    ];
 
    const items = document.querySelector(".items");
    picture.forEach((pics ) => {
        const item = document.createElement('figure');
        item.classList.add('item');
        items.appendChild(item);
        const img = document.createElement('img');
        img.src = pics;
        img.alt ='gallery pictures';
        item.appendChild(img);
    })
 })();


