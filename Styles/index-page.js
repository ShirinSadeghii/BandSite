{/* <div class="comment__parent">
              <div class="comment__avatar comment__icon"></div>
              <div class="comment__container">
                <span class="comment__details">Connor Walton</span>
                <span class="comment__details">02/17/2021</span>
              </div>
            </div>
            <p class="comment__details comment__details--position">This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence.
              Let us appreciate this for what it is and what it contains.</p> */}

const commentsArray = [
    { name: "Connor Walton", word: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.", date: "02/17/2021"},
    { name: "Emilie Beach", word: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.", date:"01/09/2021" },
    { name: "Miles Acosta", word: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.", date:"12/20/2020" },
]


let commentListEl = document.querySelector(".comment__item");
// console.log(commentsArray);

function displayComments() {
  // clear the UL element 
commentListEl.textContent = "";

for (let i = 0; i < commentsArray.length; i++) {
    // console.log(commentsArray[i]);

    let comment = commentsArray[i];

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
    dateDetailEl.innerText = comment.date;
    commentContainerEl.appendChild(dateDetailEl);

    let wordDetailEl = document.createElement("p");
    wordDetailEl.classList.add("comment__details", "comment__details--position");
    wordDetailEl.innerText = comment.word;
    commentListItemEl.appendChild(wordDetailEl);

}
}

 displayComments (); 
  

let formEl = document.querySelector(".comment__form");
// console.log("formEL: ", formEl);

formEl.addEventListener("submit", function(event) {
  console.log("Button Clicked");
  event.preventDefault();

  console.log(event.target.commentText.value);

  let newComment = {
    name: event.target.commentName.value,
    word: event.target.commentText.value,
    date: new Date().toLocaleDateString("en-US"),
  };

  console.log(newComment);

  commentsArray.unshift(newComment);

  displayComments(); 

  formEl.reset();
});



