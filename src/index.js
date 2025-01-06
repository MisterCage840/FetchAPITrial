const img = document.querySelector("img");

fetch("https://api.giphy.com/v1/gifs/translate?api_key=2vr5FWVFZkqW0qqaZgaRJawYyrvQWLVA&s=cats", {mode: 'cors'}
).then((response)=>console.log(response.json())).then((response)=>console.log(response))