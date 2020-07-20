import views from "../views/products.html";
import getData from "../utils/API";

export default async () => {
    const champsImages = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/';
    const champMoore = 'https://euw.leagueoflegends.com/es-es/champions/'
    const element = document.createElement('div');
    element.innerHTML = views;
    const list = element.querySelector('#posts')
    //const loader = element.querySelector('#loader');
    const data = await getData();
    let champs = data.data;
    console.log(champs);

    Object.values(champs).forEach(champ =>{
          list.innerHTML += `
        <div class="col s6 m6">
              <div class="card">
                <div class="card-image">
                  <img src="${champsImages}${champ.name}_0.jpg" alt="Image of ${champ.name}">
                  <span class="card-title">${champ.name}</span>
                </div>
                <div class="card-content">
                  <p>${champ.blurb}</p>
                </div>
                <div class="card-action">
                  <a href="${champMoore}${champ.name.toLowerCase()}" target="_blank">See Moore</a>
                </div>
              </div>
            </div>
        `;
    })
    //loader.style.display = "none";
    return element;
}