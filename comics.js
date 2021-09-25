//import { fetchURL, getApiURL, updateResultsAmount} from './main'
const environment = {
  BASE_URL: "https://gateway.marvel.com/v1/public",
  API_KEY: "9be68966861f4d97e1a097d75e81804f",
  HASH: "9bb93119275cabbd09f46a03eebf6a5d",
};
const fetchURL = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};
const getApiURL = (endpoint) => {
  let url =
    environment.BASE_URL +
    `/${endpoint}?ts=10&apikey=` +
    environment.API_KEY +
    "&hash=" +
    environment.HASH;
  return url;
};
//Contador RESULTADOS
let resultsAmount = 0;
const resultsCount = (count) => {
  $(".results-number").innerHTML = count;
  resultsAmount = count;
};
//Comics FETCH + Mostrar
const $ = (selector) => document.querySelector(selector);
const fetchComics = async () => {
  const {
    data: { results, total },
  } = await fetchURL(getApiURL("comics"));
  displayComics(results);
  resultsCount(total);
  
};
const displayComics = (comics) => {
  if (comics.length === 0) {
    $(".results").innerHTML =
      '<h2 class="tag is-large tag__custom">No se han encontrado resultados</h2>';
  }

  for (const comic of comics) {
    const comicCard = document.createElement("div");
    comicCard.tabIndex = 0;
    comicCard.classList.add("comic");
    comicCard.onclick = () => {fetchComic(comic.id)}
    comicCard.innerHTML += `
        <div class="column">
          <img src="${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}" alt="" class="comic-thumbnail" />
         <br> <h3 class="tag is-medium tag__custom">${comic.title}</h3>
          </div>`;

    $("#comicsList").append(comicCard);
  }
};
//Personajes FETCH + Mostrar
const fetchCharacters = async () => {
  const {
    data: { results, total },
  } = await fetchURL(getApiURL("characters"));
  displayCharacters(results);
  resultsCount(total);
  console.log(results);
};
const displayCharacters = (characters) => {
  if (characters.length === 0) {
    $(".results").innerHTML =
      '<h2 class="tag is-large tag__custom">No se han encontrado resultados</h2>';
  }
  console.log(characters);
  for (const character of characters) {
    const characterCard = document.createElement("div");
    characterCard.tabIndex = 0;
    characterCard.classList.add("character");
    characterCard.onclick = () => {fetchCharacter(character.id)}

    characterCard.innerHTML = `
        <div class="column">
            <img src="${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}" alt="" class="character-thumbnail" />
          <br>
            <h3 class="tag is-medium tag__custom">${character.name}</h3>
          </div>
        `;
    $("#charactersList").append(characterCard);
  }
};

//Buscador + Inicializador
const searchTrigger = () => {
  if ($("#search-type").value === "comics") {
    fetchComics();
  }
  if ($("#search-type").value === "personajes") {
    fetchCharacters();
  }
};
const starter = () => {
  $(".search-button").onclick = () => {
    searchTrigger();
  };
};
starter();

//Comic Details
const fetchComic = (comicID) => {};
//Character Details
const fetchCharacter = (characterID) => {}