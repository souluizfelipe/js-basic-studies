const nameInput = document.querySelector('#nameInput').value;
const button = document.querySelector('#button');
const textReturn = document.querySelector('#textReturn');

button.addEventListener('click', () => {
    if (nameInput === 'Thomas Anderson' || nameInput === 'thomas anderson') {
        textReturn.textContent = `Eu sabia que era você ${nameInput}, o personagem do filme The Matrix!`;
    } else {
        textReturn.textContent = `Me desculpe ${nameInput}, você não é quem eu estou procurando`;
    };
});
