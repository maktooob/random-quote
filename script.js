const quote = document.getElementById("quote");
const button = document.getElementById("btn");
const author = document.getElementById("author");


window.onload = function() {
    getQuote();
  };


function getQuote() {
    fetch("https://quotable.io/random")
    .then(res => res.json())
    .then(data => {
        quote.innerHTML = `"${data.content}"`;
        author.innerHTML = `-- ${data.author}`;
        
    })
}

button.addEventListener("click", () => getQuote());