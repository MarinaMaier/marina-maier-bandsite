function displayConversation(conv) {
    const convTitleEl = document.createElement("section");
    convTitleEl.classList.add("h2");
    
}
const comments = [
    {
        name: 'Victor Pinto',
        timesheet: '11/02/2023',
        text: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.'
    },
    {
        name: 'Christina Cabrera',
        timesheet: '10/28/2023',
        text: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.'
    },
    {
        name: 'Isaac Tadesse',
        timesheet: '10/20/2023',
        text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
];

for (commentIndex in comments) {
    displayComment(comments[commentIndex]);
};

function displayComment(commentObj) {
    const comment = document.createElement('article');

    const comentName = document.createElement('label');
    comentName.innerText = commentObj.name;

    const comentTimestamp = document.createElement('label');
    comentTimestamp.innerText = commentObj.timesheet;

    const comentText = document.createElement('p');
    comentText.innerText = commentObj.text;

    comment.appendChild(comentName);
    comment.appendChild(comentTimestamp);
    comment.appendChild(comentText);

    document.querySelector(".comments__section").appendChild(comment);
}