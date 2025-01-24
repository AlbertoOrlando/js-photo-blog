const contCards = document.querySelector(".contenitore_cards");

axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => {
        const cards = response.data;
        for(let i = 0; i < cards.length; i++){
            const card = cards[i];
            const { title, date, url } = card;
            contCards.innerHTML += `
            <div class="col-4">
                <div class="card mb-3">
                    <img src="${url}" class="card-img-top" alt="${title}">
                    <div class="card-body"> 
                        <p class="card-text"><small class="text-body-secondary">${date}</small></p>
                        <h5 class="card-title">${title}</h5>
                    </div>
                  </div>
            </div>
            `;
        }
    })
    .catch(error => {
        console.error(error)
    })