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

(function () {  
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