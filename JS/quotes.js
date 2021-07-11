const quotes = [
    {
        quote: "The trouble with quotes on the Internet is that you can never know if they are genuine.",
        author: "Abraham Lincoln"
    },
    {
        quote: "Kissing the frog to get the prince is a waste of a prefectly good frog.",
        author: "Jim Benton"
    },
    {
        quote: "아는 것과 실천하는 것은 다르다.",
        author: "DDOLDDOLDDOLE(Jung, Taejune)"
    },
    {
        quote: "마음껏 비웃어... 그 비웃음 환호성으로 바꿔줄 테니까.",
        author: "DDaHyoNi(Baek, Sanghyeon)"
    },
    {
        quote: "오늘은 달라. 어제의 내가 아니야.",
        author: "KimDoe (Lee, Taekki)"
    },
    {
        quote: "The purpose of education is to replace an empty mind with an open one.",
        author: "Malcolm Forbes"
    },
    {
        quote: "A great man is hard on himself; a small man is hard on others",
        author: "Confucius"
    },
    {
        quote: "Friendship improves happiness, and abates misery, by doubling our joys, and dividing our grief.",
        author: "Marcus Tullious Cicero"
    },
    {
        quote: "As you think, so shall you become.",
        author: "Bruce Lee"
    },
    {
        quote: "Don't watch the big clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "There is nothing like a dream to create the future.",
        author: "Victor Hugo"
    },
    {
        quote: "Even though the future seems far away, it is actually beginning right now.",
        author: "Mattie Stepanek"
    },
    {
        quote: "At his best, man is the noblest of all animals; separated from law and justice he is the worst.",
        author: "Aristotle"
    },
    {
        quote: "Look back over the past, with its changing empires that rose and fell, and you can foresee the future, too.",
        author: "Marcus Aurelius"
    },
    {
        quote: "Bravery is being the only one who knows you're afraid.",
        author: "David Hackworth"
    },
    {
        quote: "All the world's a stage, and all the men and women merely players.",
        author: "William Shakespeare"
    },
    {
        quote: "Whatever is contrary to nature is contrary to reason, and whatsoever is contrary to reason is absurd.",
        author: "Baruch Spinoza"
    },
    {
        quote: "You don't stumble upon your heritage. It's there, just waiting to be explored and shared.",
        author: "Robbie Robertson"
    },
    {
        quote: "We are all apprentices in a craft where no one ever becomes a master.",
        author: "Ernest Hemingway"
    },
    {
        quote: "Not all who wander are lost.",
        author: "J.R.R. Tolkien"
    },
    {
        quote: "Don't judge someone until you've stood at his forge and worked with his hammer.",
        author: "Rick Riordan"
    }
];

const myQuote = document. querySelector("#quote span:first-child");
const myAuthor = document. querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

myQuote.innerText = todaysQuote.quote;
myAuthor.innerText = todaysQuote.author;