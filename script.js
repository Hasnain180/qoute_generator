

let qoute = document.getElementById("qoute");
let authore = document.getElementById("authore");
let api_url = "https://type.fit/api/quotes";

async function getqoute(url){
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    // Select a random quote from the array
    let randomIndex = Math.floor(Math.random() * data.length);
    let randomQuote = data[randomIndex];

    // Display the quote and author
    qoute.innerHTML = randomQuote.text;
    authore.innerHTML = randomQuote.author || "Unknown";
}

getqoute(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=ss&url=url")
}
