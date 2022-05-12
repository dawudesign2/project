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
document.querySelector('#button').addEventListener('click', onClick);
document.querySelector('.close').addEventListener('click', onClose);

