const commentsSection = document.querySelector(".comments__section");
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

for (const index in comments) {
    displayComment(comments[index]);
};

function displayComment(commentObj) {
    const comment = document.createElement('article');
    comment.classList.add('article__wrapper');

    const commentSecWrep1 = document.createElement('div');
    commentSecWrep1.classList.add('comments__section__wrapper1');

    const commentImg = document.createElement('div');
    commentImg.classList.add('comments__avatar');

    const commentSecWrep2 = document.createElement('div');
    commentSecWrep2.classList.add('comments__section__wrapper2');

    const comentWrapper = document.createElement('div');
    comentWrapper.classList.add('lable__wrapper');

    const comentName = document.createElement('label');
    comentName.classList.add('label__wrapper__name')
    comentName.innerText = commentObj.name;

    const comentTimestamp = document.createElement('label');
    comentTimestamp.classList.add('label__wrapper__timestamp')
    comentTimestamp.innerText = commentObj.timesheet;

    const comentText = document.createElement('p');
    comentText.classList.add('user__comment')
    comentText.innerText = commentObj.text;
    
    const dividerContainer = document.createElement('div');
    dividerContainer.classList.add('divider__wrapper');

    const comentDivider = document.createElement('hr');
    dividerContainer.appendChild(comentDivider);

    comentWrapper.appendChild(comentName);
    comentWrapper.appendChild(comentTimestamp);
    commentSecWrep1.appendChild(commentImg);
    commentSecWrep2.appendChild(comentWrapper);
    commentSecWrep2.appendChild(comentText);
    comment.appendChild(commentSecWrep1);
    comment.appendChild(commentSecWrep2); 
    commentsSection.appendChild(comment);
    commentsSection.appendChild(dividerContainer);
}


const addUserForm = document.getElementById("add-user-form");
const formErrors = document.getElementById("add-user-form-errors");

addUserForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const text = event.target.text.value;
    const userNameInput = event.target.name;
    const userCommentInput = event.target.text;
   
    if (name === "") {
        formErrors.innerText = "Add your name";
        userNameInput.style.borderColor = "#D22D2D";
        return;
    }
    if (text === "") {
        formErrors.innerText = "Add your comment";
        userCommentInput.style.borderColor = "#D22D2D";
        return;
    }
  
    formErrors.innerText = "";
   
    const newComment = {
        name: name,
        text: text,
        timesheet: new Date().toLocaleDateString('en-GB'),
    }
    comments.unshift(newComment)
  
    commentsSection.innerHTML = "";
  
    for (const index in comments) {
        displayComment(comments[index]);
    };
});