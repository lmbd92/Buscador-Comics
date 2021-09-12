const BASE_URL= 'https://gateway.marvel.com/v1/public';
const API_KEY= '9be68966861f4d97e1a097d75e81804f';
const HASH = 'cb3c425f50a73eac3f6d80348a819c1b';
const url = BASE_URL + "/comics?ts=1000&apikey=" + API_KEY + "&hash=" + HASH;
  
const $ = (selector) => document.querySelector(selector)

fetch(url)
.then(response => response.json())
.then(json=>{
  console.log(json.data)
  json.data.results.map(item =>{
   
        $('#appDiv').innerHTML += `<div class="item">
    <span>${item.title}</span>
    <img src=''
    </div>`
   
    
  })
  
})
