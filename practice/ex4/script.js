const button = document.querySelector('#button');
const inpAge = document.querySelector('#inpAge');
const inpName = document.querySelector('#inpName');
const textReturn = document.querySelector('#textReturn');

button.addEventListener('click', () => {
    let age = Number(inpAge.value);
    let name = inpName.value;

    if (age.length === 0 || name.length === 0) {
        alert('preencha todos os campos');
    } else if (name === 'Thomas Anderson' && age >= 18) {
        textReturn.textContent = `Hello Mr. Anderson, você é maior de idade`
    } else if (age >= 18 ) {
        textReturn.textContent = `olá ${name}, você é maior de idade`
    } else if (age < 18) {
        textReturn.textContent = ` olá ${name}, você é menor de idade`
    }
});

