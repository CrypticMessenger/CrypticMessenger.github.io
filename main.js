const quote = document.getElementById("quote");
const author = document.getElementById("author");
fetch("https://programming-quotes-api.herokuapp.com/Quotes/random").then(function (response) {
    return response.json();
}).then(function (data) {  
    const obj = data;
    quote.textContent = obj["en"];
    author.textContent = obj["author"];
});