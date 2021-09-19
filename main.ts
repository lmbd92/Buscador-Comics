type Comic = {
  title: string,
}
const environment = {
  BASE_URL: "https://gateway.marvel.com/v1/public",
  API_KEY: "9be68966861f4d97e1a097d75e81804f",
  HASH: "9bb93119275cabbd09f46a03eebf6a5d"
};
const generateUrl = (endpoint: string) => `http://gateway.marvel.com/v1/public/${endpoint}?ts=10&apikey=9be68966861f4d97e1a097d75e81804f&hash=9bb93119275cabbd09f46a03eebf6a5d`

const url = environment.BASE_URL + "/comics?ts=10&apikey=" + environment.API_KEY + "&hash=" + environment.HASH
const $ = (selector: string) => document.querySelector(selector);
let comics: string[];

const loadComics = async () => {
  let marvelComics;
  try {
    const res = await fetch(generateUrl('comics'));
    marvelComics = await res.json();
    console.log(marvelComics);
    showComics(marvelComics.data.results);
  } catch (err) {
    console.error(err);
  }
  return marvelComics;
}
const showComics = (comics:Comic[]) => {

    const htmlString = comics.map((comic) => {
        return `
    <div class='card'>
      <header class='card-header'>
        <p class='card-header-title'>${comic.title}</p>
      </header>
    </div>
    `;
    })
    .join('');
    
     let comicsList = $('#comicsList')!
    comicsList.innerHTML = htmlString
    }
loadComics();