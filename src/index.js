import "./style.css";
import errorImg from "./error.jpg";

const img = document.querySelector("img");
const submitBtn = document.querySelector(".submitBtn");
const input = document.getElementById("search");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let searchterm = input.value;
  let url =
    "https://api.giphy.com/v1/gifs/translate?api_key=2vr5FWVFZkqW0qqaZgaRJawYyrvQWLVA&s=" +
    searchterm;
  fetch(url, { mode: "cors" })
    .then((response) => response.json())
    .then((response) => {
      if (response.data) img.src = response.data.images.original.url;
      else img.src = errorImg;
    })
    .catch((error) => (img.src = errorImg));
});
