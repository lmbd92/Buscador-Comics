import { environment } from "./assets/environment";
import { fetch } from "cross-fetch";


const url = environment.BASE_URL + "/comics?ts=10&apikey=" + environment.API_KEY + "&hash=" + environment.HASH
//const $ = (selector) => document.querySelector(selector);
let comics: string[];
 
//Load
const loadComics = async (url) => {
    let marvelComics;
    try {
        const res = await fetch(url);
        marvelComics = await res.json();
        //showComics(marvelComics.data.results);
      } catch (err) {
        console.error(err);
      }
      return marvelComics;
}
// const showComics = (comics) => {
  
//     const htmlString = comics.map((comic) => {
//         return `
//     <div class='card'>
//       <header class='card-header'>
//         <p class='card-header-title'>${comic.title}</p>
//       </header>
//     </div>
//     `;
//     })
//     .join('');
//   $('#comicsList').innerHTML = htmlString;
//   }
loadComics(url);