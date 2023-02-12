let anime = document.getElementById('anime')

let quotes = document.getElementById('quote')
let character = document.getElementById('character')
let button = document.getElementById('generate')

let generateQuote = () =>{
  fetch("https://animechan.vercel.app/api/random")
          .then((response) => response.json())
          .then((quote) => {
            console.log(`Anime = ${quote.anime}`)
            anime.innerHTML= `Anime = ${quote.anime}`;
            quotes.innerHTML = `Quote = ${quote.quote}`;
            character.innerHTML = `Character = ${quote.character}`;
          })
          .catch(()=>{
            console.error('Shit')
            anime.innerHTML = `Anime = 404`
            quotes.innerHTML = `Quote = Maximum limit of 100 requests per hour met`
            character.innerHTML = `Character = Server`
          })
  
}

button.addEventListener('click', generateQuote)


