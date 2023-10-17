import BandSiteAPI from "./band-site-api.js";
const bandSiteAPI = new BandSiteAPI("980bfdc7-c795-45a5-b04e-1bcc64308cae");


let commentListEl = document.querySelector(".comment__list");
let selectedCards = '';


async function getShows() {
  const shows = await bandSiteAPI.getShows();
  console.log(shows);

  commentListEl.textContent = "";

  shows.forEach((show) => {
    let commentListItemEl = document.createElement("li");
    commentListItemEl.classList.add("comment__item", "comment__item--flex");
    commentListEl.appendChild(commentListItemEl);

    let commentContainerEl = document.createElement("div");
    commentContainerEl.classList.add("comment__container", "comment__container--flex");
    commentListItemEl.appendChild(commentContainerEl);

    let dateLabelEl = document.createElement("label");
    dateLabelEl.classList.add("date__details--color");
    dateLabelEl.innerText = "DATE";
    commentContainerEl.appendChild(dateLabelEl);

    let dateDetailEl = document.createElement("p");
    dateDetailEl.classList.add("date__details", "date__details--bold");
    let options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    dateDetailEl.innerText = new Date (show.date).toLocaleDateString("en-US", options);
    commentContainerEl.appendChild(dateDetailEl);

    let venueLabelEl = document.createElement("label");
    venueLabelEl.classList.add("date__details--color");
    venueLabelEl.innerText = "VENUE";
    commentContainerEl.appendChild(venueLabelEl);

    let venueDetailEl = document.createElement("p");
    venueDetailEl.classList.add("date__details", "date__details--relative");
    venueDetailEl.innerText = show.place;
    commentContainerEl.appendChild(venueDetailEl);

    let locationLabelEl = document.createElement("label");
    locationLabelEl.classList.add("date__details--color");
    locationLabelEl.innerText = "LOCATION";
    commentContainerEl.appendChild(locationLabelEl);

    let locationDetailEl = document.createElement("p");
    locationDetailEl.classList.add("date__details");
    locationDetailEl.innerText = show.location;
    commentContainerEl.appendChild(locationDetailEl);

    let buttonEl = document.createElement("button");
    buttonEl.classList.add("comment__button", "comment__button--shows");
    buttonEl.innerText = "BUY TICKETS";
    commentListItemEl.appendChild(buttonEl);

  });

 selectedCards =  document.querySelectorAll(".comment__item");

 let currentSelected = null;

for (let i = 0; i < selectedCards.length; i++) {
  selectedCards[i].addEventListener("click", function(event) {
    console.log("Card clicked");
    currentSelected = event.currentTarget;
    console.log(currentSelected);

    selectedCards.forEach((card)=>{
      card.classList.remove("comment--select");
    }); 

    if (currentSelected) {
      currentSelected.classList.add("comment--select"); //Remove active state from previous card.
    } 
  });
}
}
  getShows();




