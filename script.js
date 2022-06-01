const quote = document.getElementById("quote");
const button = document.getElementById("btn");

button.addEventListener("click", getQuote());


function getQuote() {
    fetch("http://quotable.io/random", {cache: "reload"})
    .then(res => res.json())
    .then(data => {
        quote.innerHTML = `"${data.content}"`;
        console.log(data.content)
    })
}