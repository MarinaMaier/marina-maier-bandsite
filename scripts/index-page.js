import { getApiKey } from './band-site-api.js';
import { BandSiteApi } from './band-site-api.js';

const apiKey = await getApiKey();
let comments = [];
getAndDisplayComments();

async function getAndDisplayComments() {
    try {
        comments = await new BandSiteApi(apiKey).getComments();
        for (let i = comments.length - 1; i >= 0; i--) {
            displayComment(comments[i]);
        }
    } catch (error) {
        console.error('Failed getting comments:', error);
    }
}

function displayComment(commentObj) {
    const commentsSection = document.querySelector(".comments__section");
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
    comentTimestamp.innerText = new Date(commentObj.timestamp).toLocaleDateString();

    const comentText = document.createElement('p');
    comentText.classList.add('user__comment')
    comentText.innerText = commentObj.comment;

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
const userNameError = document.getElementById("user-name");
const userCommentError = document.getElementById("user-comment");
const formErrors = document.getElementById("add-user-form-errors");

addUserForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const comment = event.target.text.value;
    userNameError.style.borderColor = "";
    userCommentError.style.borderColor = "";

    let errors = "";
    if (name === "") {
        errors += "Add your name\n";
        userNameError.style.borderColor = "#D22D2D";
    }
    if (comment === "") {
        errors += "Add your comment\n";
        userCommentError.style.borderColor = "#D22D2D";
    } 
    formErrors.innerText = errors;
    if (errors !== "") {
        return;
    }
    try {
        const bandSiteApi = new BandSiteApi(apiKey);
        const newComment = await bandSiteApi.postComment({
            name: name,
            comment: comment
        });
        comments.unshift(newComment);
        const commentsSection = document.querySelector(".comments__section");
        commentsSection.innerText = "";
        for (const index in comments) {
            displayComment(comments[index]);
        }
        event.target.name.value = "";
        event.target.text.value = "";
    } catch (error) {
        console.error('Failed posting comment:', error);
        console.log(error);
    }
});