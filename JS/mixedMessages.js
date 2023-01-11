const quotes = ["You miss 100% of the shots you don’t take.", "Every strike brings me closer to the next home run.", "Life is 10% what happens to me and 90% of how I react to it.", "The mind is everything. What you think you become.", " Eighty percent of success is showing up. ", " I am not a product of my circumstances. I am a product of my decisions. ", "Either you run the day, or the day runs you. ", "Whether you think you can or you think you can’t, you’re right.", "The best revenge is massive success. ", "Believe you can and you’re halfway there. ", "Everything you’ve ever wanted is on the other side of fear.", "Fall seven times and stand up eight. ", "When I let go of what I am, I become what I might be.", "If the wind will not serve, take to the oars."]

function generateRandomQuote(){
    listLength = quotes.length;
    generatePosition = Math.floor(Math.random() * (listLength + 1));
    return quotes[generatePosition];
}


