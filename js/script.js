// selezioniamo il div contenente tutte le nostre card
const contCards = document.querySelector(".contenitore_cards");
// selezioniamo il div contenente il nostro overlay
const contInHover = document.getElementById("containerHover");
// selezioniamo il bottone di chiusura overlay
const closeHover = document.getElementById("bottone");
// selezioniamo in nostro tag img che conterrà le immagini in overlay
const imgInHover = document.getElementById("immagineOverLay");

// richiesta http get ad axios del nostro endpoint
axios.get("https://lanciweb.github.io/demo/api/pictures/")
    // effettuiamo tramite il metodo then la nostra callback (il tutto avviene in maniera asincrona)
    .then(response => {
        // assegnamo a cards l'array di ogetti data contenenti le propieta da estrapolare
        const cards = response.data;
        // cicliamo per tutta la lunghezza del nostro array
        for(let i = 0; i < cards.length; i++){
            // assegniamo a card l'elemento iesimo si cards(la singola carta)
            let card = cards[i];
            // destrutturiamo i nostri ogetti usando le key che conosciamo grazie ad un console log fatto precedentemente (ora cancellato)
            const { title, date, url } = card;
            // generiamo il nostro codice html tramite js con i valori che ci interessano
            contCards.innerHTML += `
                <div class="card">
                    <img class="pin" src="img/pin.svg" alt="pin">
                    <img src="${url}" class="card-img" alt="${title}">
                    <div class="card-body"> 
                        <p class="card-text"><small class="text-body-secondary">${date}</small></p>
                        <h5 class="card-title">${title}</h5>
                    </div>
                  </div>
            `;
        }
        // selezioniamo tutte le card che sono state generate
        const newCards = document.querySelectorAll(".card");
        // effettuiamo un ciclo forEach (che si usa per gli array) su newcards con elemento card
        newCards.forEach(card => {
            // assegniamo ad ogni card l'ascolto all'evento click
            card.addEventListener("click", () => {
                // assegnamo a img l'img della card
                const img = card.querySelector(".card-img");
                // assegnamo all'src della nostra immagine in overlay lo stesso src dell'img della card
                imgInHover.src = img.src;
                // rimuoviamo la classe display none dal contenitore in overlay per renderlo visibile 
                contInHover.classList.remove("d_none");
            });
        });
        // assegnamo al bottone l'ascolto dell'evento click
        closeHover.addEventListener("click", () => {
            // ridiamo la classe d none al contenitore per non renderlo nuovamente visibile
            contInHover.classList.add("d_none");
        });
        
    })
    // gestiamo gli errori
    .catch(error => {
        // facciamo apparire in console un mes di errore
        console.error(error)
        // facciamo apparire in pagine al posto delle card un messaggio di errore per l'utente
        contCards.innerHTML =`<h3>404-not found</h3>`;
    })