let returnAge = document.querySelector('#returnAge')
let ageInput = document.querySelector('#ageInput');
let button = document.querySelector("#button");


button.addEventListener('click', () => {
    console.log(Number(ageInput.value))

    if (Number(ageInput.value) >= 18) {
        returnAge.textContent = 'você é maior de idade parabéns, CRINGE!!!'
    } else {
        returnAge.textContent = 'você não é maior de idade, seu ZENIAL'
    }
    
    ageInput.textContent = ''
});
