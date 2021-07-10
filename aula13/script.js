const clients = [
    {
        name: 'Luiz',
        age: 25,
        progLangs: [ 'JS', 'PY', 'C#'],
    },
    {
        name: 'Amanda',
        age: 19,
        progLangs: [ 'C', 'HTML', 'Css'],
    },
    {
        name: 'Victor',
        age: 64,
        progLangs: [ 'Cobol', 'Delphi', 'C'],
    },
]

let HTMLClient = ''

for(let client of clients) {

    let progLangList = ''

    for(let progLang of client.progLangs) {
        progLangList += `<li>${progLang}</li>`
    }

    HTMLClient += `
        <li>
            <b>Nome:</b>${client.name}<br>
            <b>Idade:</b>${client.age}<br>
            <b>Linguagens:</b> 
            <ul>
                ${progLangList}
            </ul>
        </li>
    `
}


document.querySelector('#listClient').innerHTML = HTMLClient 