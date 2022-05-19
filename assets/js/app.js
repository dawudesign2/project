//Modal
import price from './price.js'


(function () {
    // Function Onclick ajouter la classe OPEN
    const onClick = (e) => {
        e.preventDefault();
        document.querySelector('#modal').classList.add('open');
    }
    // Function OnClose enleve la classe OPEN
    const onClose = (e) => {
        e.preventDefault();
        document.querySelector('#modal').classList.remove('open');
    }
    // Ecouteur
    document.querySelector('#btn').addEventListener('click', onClick);
    document.querySelector('.close').addEventListener('click', onClose);
})();
//NavBar
(function () {  
     // Function Onclick ajouter la classe OPENNav
    const onNav = (e) => {
        e.preventDefault();
        const open = document.querySelector('.openNav');
        document.querySelector('nav').classList.add('openNav');
        if(open){
            document.querySelector('nav').classList.remove('openNav');
        }
    }
    document.querySelector('#headerIcon').addEventListener('click', onNav);
})();

//Explore 
(function() {
     // Function Onclick ajouter la classe OnExolorer
    const onExplore = (e) => {
        e.preventDefault();
        document.querySelector('.explore').classList.add('onExplore');
    }
    const offExplore = (e) => {
        e.preventDefault();
        document.querySelector('.explore').classList.remove('onExplore');
    }
    document.querySelector('#explore').addEventListener('click', onExplore);
    document.querySelector('#close').addEventListener('click', offExplore);
})();

//Carousel 
(function(){
    const delay = 3000; //ms
    const slides = document.querySelector('.slides');
    const count = slides.childElementCount;
    const maxLeft = (count - 1 ) * 100 * -1;

    let current = 0;
    const changeSlide = (next = true) => {
        if(next){
            current += current > maxLeft ? - 100 : current * -1;
        }else {
            current = current < 0 ? current + 100 : maxLeft;
        }
        slides.style.left = current + "%";
    }
    let auto = setInterval(changeSlide, delay);
    const restart = () => {
        clearInterval(auto);
        auto = setInterval(changeSlide, delay);
    }
    document.querySelector(".nextSlide").addEventListener('click', () => {
        changeSlide();
        restart();
    });
    document.querySelector(".prevSlide").addEventListener('click', () => {
        changeSlide(false);
        restart();
    })
})();

price()