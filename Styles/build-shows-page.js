{/* <ul class="comment__list">
<li class="comment__item">
  <div class=comment__container>
    <label class="date__details--color">DATE</label>
    <p class=" date__details date__details--bold">Mon Sept 06 2021</p>
    <label class="date__details--color">VENUE</label>
    <p class="date__details">Ronald Lane</p>
    <label class="date__details--color">LOCATION</label>
    <p class="date__details">San Francisco, CA</p>
  </div>
  <button class="comment__button">BUY TICKETS</button>
</li>
</ul> */}

const detailsArray = [
    {dateLabel: "DATE", date: "Mon Sept 06 2021", venueLabel: "VENUE", venue: "Ronald Lane", locationLabel: "LOCATION", location: "San Francisco, CA", button: "BUY TICKETS"},
    {dateLabel: "DATE", date: "Tue Sept 21 2021", venueLabel: "VENUE", venue: "Pier 3 East", locationLabel: "LOCATION", location: "San Francisco, CA", button: "BUY TICKETS"},
    {dateLabel: "DATE", date: "Fri Oct 15 2021", venueLabel: "VENUE", venue: "View Lounge", locationLabel: "LOCATION", location: "San Francisco, CA", button: "BUY TICKETS"},
    {dateLabel: "DATE", date: "Sat Nov 06 2021", venueLabel: "VENUE", venue: "Hyatt Agency", locationLabel: "LOCATION", location: "San Francisco, CA", button: "BUY TICKETS"},
    {dateLabel: "DATE", date: "Fri Nov 26 2021", venueLabel: "VENUE", venue: "Moscow Center", locationLabel: "LOCATION", location: "San Francisco, CA", button: "BUY TICKETS"},
    {dateLabel: "DATE", date: "Wed Dec 15, 2021", venueLabel: "VENUE", venue: "Press Club", locationLabel: "LOCATION", location: "San Francisco, CA", button: "BUY TICKETS"},
]

let commentListEl = document.querySelector(".comment__list");

function displayDates() {

commentListEl.textContent = "";

for (let i = 0; i < detailsArray.length; i++) {
  let date = detailsArray[i];

    let commentListItemEl = document.createElement("li");
    commentListItemEl.classList.add("comment__item", "comment__item--flex");
    commentListEl.appendChild(commentListItemEl);

    let commentContainerEl = document.createElement("div");
    commentContainerEl.classList.add("comment__container", "comment__container--flex");
    commentListItemEl.appendChild(commentContainerEl);

    let dateLabelEl = document.createElement("label");
    dateLabelEl.classList.add("date__details--color");
    dateLabelEl.innerText = date. dateLabel;
    commentContainerEl.appendChild(dateLabelEl);

    let dateDetailEl = document.createElement("p");
    dateDetailEl.classList.add("date__details", "date__details--bold");
    dateDetailEl.innerText = date. date;
    commentContainerEl.appendChild(dateDetailEl);

    let venueLabelEl = document.createElement("label");
    venueLabelEl.classList.add("date__details--color");
    venueLabelEl.innerText = date. venueLabel;
    commentContainerEl.appendChild(venueLabelEl);

    let venueDetailEl = document.createElement("p");
    venueDetailEl.classList.add("date__details", "date__details--relative");
    venueDetailEl.innerText = date. venue;
    commentContainerEl.appendChild(venueDetailEl);

    let locationLabelEl = document.createElement("label");
    locationLabelEl.classList.add("date__details--color");
    locationLabelEl.innerText = date. locationLabel;
    commentContainerEl.appendChild(locationLabelEl);

    let locationDetailEl = document.createElement("p");
    locationDetailEl.classList.add("date__details");
    locationDetailEl.innerText = date.location;
    commentContainerEl.appendChild(locationDetailEl);

    let buttonEl = document.createElement("button");
    buttonEl.classList.add("comment__button", "comment__button--shows");
    buttonEl.innerText = date. button;
    commentListItemEl.appendChild(buttonEl);

}
}

displayDates();

