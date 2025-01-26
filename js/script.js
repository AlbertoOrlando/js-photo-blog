const contCards = document.querySelector(".contenitore_cards");

axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => {
        const cards = response.data;
        for(let i = 0; i < cards.length; i++){
            card = cards[i];
            const { title, date, url } = card;
            contCards.innerHTML += `
                <div class="card mb-3">
                    <img src="${url}" class="card-img-top" alt="${title}">
                    <div class="card-body"> 
                        <p class="card-text"><small class="text-body-secondary">${date}</small></p>
                        <h5 class="card-title">${title}</h5>
                    </div>
                        <div class="pin">
                            <img src="img/pin.svg" alt="pin">
                        </div>
                  </div>
            `;
        }
    })
    .catch(error => {
        console.error(error)
    })