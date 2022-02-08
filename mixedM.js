let inspirationalPhrases = ["When you have a dream, you’ve got to grab it and never let go.",
"Nothing is impossible. The word itself says I’m possible!",
"There is nothing impossible to they who will try.",
"The bad news is time flies. The good news is you’re the pilot.",
"Life has got all those twists and turns. You’ve got to hold on tight and off you go.",
"Keep your face always toward the sunshine, and shadows will fall behind you.",
"Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.",
"You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.",
"Success is not final, failure is not fatal: it is the courage to continue that counts.",
"You define your own life. Don’t let other people write your script."];

let birthdayPhrases = ["Another year and you are still the MVP, Mom. I hope all your happy birthday wishes come true. Happy birthday!",
"Glad you made it this far and glad you made me. Happy birthday mommy. I’ll make sure your sweet birthday wishes come true.",
"Mom, everyone is jealous of how beautiful you look on your birthday. Your birthday wishes should be to keep doing you. Happy birthday mom!",
"Mom we celebrate you because your accomplishments created our world. Happy birthday!",
"I am who I am because of you mom. Your happy birthday wishes are my command. Happy birthday!",
"You’ve always been my favorite person to celebrate, Mom. You are going to get all your birthday wishes today. Happy birthday Mom!",
"I promise not to let the wax drip onto your cake this time. Just blow the candles out faster and make your birthday wishes. Happy birthday!",
"I cherish you for being an amazing parent. Have a very happy birthday, mom.",
"One of these years I might give you a grand child as a birthday gift. Happy birthday!",
"Mom, you already know how endless my love is for you, so how do I make your birthday wish come true? Happy birthday!"];

let z = Math.floor(Math.random() * 2);
let x = Math.floor(Math.random() * 9 +1);

if(z === 0){
    document.write("Inspirational: " + inspirationalPhrases[x])
}else{
    document.write("Birthday: " + birthdayPhrases[x])
}

//console.log(z);