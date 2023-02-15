let anime = document.getElementById('anime')

let quotes = document.getElementById('quote')
let character = document.getElementById('character')
let button = document.getElementById('generate')

let main = document.getElementById('main')

let generateQuote = () =>{
  console.log('working')
  fetch("https://animechan.vercel.app/api/random")
          .then((response) => response.json())
          .then((quote) => {
            main.classList.remove('hidden');
            anime.innerHTML= `${quote.anime}`;
            quotes.innerHTML = `${quote.quote}`;
            character.innerHTML = `- ${quote.character}`;
          })
          .catch(()=>{
            console.error('Shit')
            anime.innerHTML = `404`
            quotes.innerHTML = `Maximum limit of 100 requests per hour met`
            character.innerHTML = `Server`
          })
  
}

button.addEventListener('click', generateQuote);

document.onkeydown = () =>{ if (event.keyCode == 13) {document.getElementById('generate').click()}}
