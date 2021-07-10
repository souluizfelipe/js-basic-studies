const inpNum = document.querySelector('#inpNum');
const button = document.querySelector('#button');
const textReturn = document.querySelector('#textReturn');


button.addEventListener('click', () => {
    let num = Number(inpNum.value);
    console.log(num);

    for(let i = 1; i <= 10; i++) {
        let res = num * i
        textReturn.innerHTML += `
                <p>${num} x ${i} = ${res}</p>
        ` 
    }
    
});