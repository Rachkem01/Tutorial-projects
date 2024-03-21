const generateQuoteBtn = document.getElementById("qouteBtn");

const quouteOutput = document.getElementById("quoteOutput");

const authorOutput = document.getElementById("authorOutput");

generateQuoteBtn.addEventListener("click",generateQuote)

// https://www.shopify.com/blog/motivationalquotes
const arrayQuotes= [
    {author:"Albert Einstein",
    quote:"We cannot solve problemwith the jkind of thinking we employed with them"
},
{
    author:"MC Davis",
    quote:"A word is enough for the wise"
},
{
    author: "Alibaba",
quote:"if you want to build a business that transcends lifetime build a people"
},
{
    author:"African Proverbs",
    quote: "A child is a reflection of the home"
},
{
    author:"Albert Einstein",
    quote:"We cannot solve problemwith the jkind of thinking we employed with them"
}

]

function generateQuote (){
    let random = Number.parseInt(Math.random()*arrayQuotes.length +1);
    quouteOutput.innerHTML = `<span>${arrayQuotes[random].quote}</span>`
    authorOutput.innerHTML =`<small>${arrayQuotes[random].author}-</small>`
}