import BandSiteAPI from "./band-site-api.js";
const bandSiteAPI = new BandSiteAPI("980bfdc7-c795-45a5-b04e-1bcc64308cae");


let commentListEl = document.querySelector(".comment__item");
let formEl = document.querySelector(".comment__form");


async function getComments() {
  const comments = await bandSiteAPI.getComments();
  console.log(comments);

  commentListEl.innerHTML = "";

  // create forEach Loop
  comments.forEach((comment) => {
    let commentListItemEl = document.createElement("li");
    commentListItemEl.classList.add("comment__item");
    commentListEl.appendChild(commentListItemEl);

    let commentParentEl = document.createElement("div");
    commentParentEl.classList.add("comment__parent");
    commentListItemEl.appendChild(commentParentEl);

    let commentAvatarEl = document.createElement("div");
    commentAvatarEl.classList.add("comment__avatar", "comment__icon");
    commentParentEl.appendChild(commentAvatarEl);

    let commentContainerEl = document.createElement("div");
    commentContainerEl.classList.add("comment__container");
    commentParentEl.appendChild(commentContainerEl);

    let nameDetailEl = document.createElement("span");
    nameDetailEl.classList.add("comment__details", "comment__details--bold");
    nameDetailEl.innerText = comment.name;
    commentContainerEl.appendChild(nameDetailEl);

    let dateDetailEl = document.createElement("span");
    dateDetailEl.classList.add("comment__details", "comment__details--color");
    dateDetailEl.innerText = new Date (comment.timestamp).toLocaleDateString();
    commentContainerEl.appendChild(dateDetailEl);

    let wordDetailEl = document.createElement("p");
    wordDetailEl.classList.add("comment__details", "comment__details--position");
    wordDetailEl.innerText = comment.comment;
    commentListItemEl.appendChild(wordDetailEl);
  });
}


formEl.addEventListener("submit", async function(event) {
  console.log("Button Clicked");
  event.preventDefault();
  console.log(event.target.commentName.value);
  console.log(event.target.commentText.value);

  const response = await bandSiteAPI.postComments({
    name: event.target.commentName.value ,
    comment: event.target.commentText.value,
    });

  getComments();

  formEl.reset();
});

getComments();


