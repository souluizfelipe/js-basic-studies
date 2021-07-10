const cardWrapper = document.querySelector('.card-wrapper');


let actorsList = [
    {  
      name: 'Keanu Reeves',
      character: 'Neo',
      movie: 'The Matrix',
    },
    {
      name: 'David Prowse',
      character: 'Darth Vader',
      movie: 'Star Wars Episódios IV-V-VI',
    },
    {
      name: 'Christian Bale',
      character: 'Batman',
      movie: 'Batman Begins'
    },
    {
        name: 'Jim Carrey',
        character: 'Stanley Ipkiss',
        movie: 'The Mask'
      },
]

let actorsListHtml = ''

for(let actor of actorsList) {
    actorsListHtml += `
        <div class="card">
            <h1 class="name">${actor.name}</h1>
            <p class="text">Interpreta o personagem ${actor.character} no filme ${actor.movie}</p>
        </div>
    
    ` 
}

cardWrapper.innerHTML = actorsListHtml
