// <article class="shows__wrapper">
//     <div class="shows__wrapper__container">
//         <div class="shows__wrapper__container__date">
//             <p class="shows__wrapper__container__date__label">DATE</p>
//             <p class="shows__wrapper__container__date__text">Mon Sept</p>
//         </div>
//         <div class="shows__wrapper__container__venue">
//             <p class="shows__wrapper__container__venue__label">VENUE</p>
//             <p class="shows__wrapper__container__venue__text">Ronald Lane</p>
//         </div>
//         <div class="shows__wrapper__container__location">
//             <p class="shows__wrapper__container__location__label">LOCATION</p>
//             <p class="shows__wrapper__container__location__text">San</p>
//         </div>
//         <button class="shows__wrapper__container__btn">BUY TICKETS</button>
//         <div class="shows__wrapper__container__divider2"><hr></div>
//     </div>
//     <div class="shows__wrapper__divider1"><hr></div>
// </article>

const shows = [
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Oct 12 2024",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 16 2024",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 29 2024",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 18 2024",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

for (const index in shows) {
  displayShows(shows[index], parseInt(index));
}

function displayShows(showsObj) {

  const showContainer = document.createElement('div');
  showContainer.classList.add('shows__wrapper__container');

  const showContainerDate = document.createElement('div');
  showContainerDate.classList.add('shows__wrapper__container__date');

  const showLabelDate = document.createElement('p');
  showLabelDate.classList.add('shows__wrapper__container__date__label');
  showLabelDate.textContent = 'DATE';

  const showLabelDateText = document.createElement('p');
  showLabelDateText.classList.add('shows__wrapper__container__date__text');
  showLabelDateText.textContent = showsObj.date;

  const showContainerVenue = document.createElement('div');
  showContainerVenue.classList.add('shows__wrapper__container__venue');

  const showLabelVenue = document.createElement('p');
  showLabelVenue.classList.add('shows__wrapper__container__venue__label');
  showLabelVenue.textContent = 'VENUE';

  const showLabelVenueText = document.createElement('p');
  showLabelVenueText.classList.add('shows__wrapper__container__venue__text');
  showLabelVenueText.textContent = showsObj.venue;

  const showContainerLocation = document.createElement('div');
  showContainerLocation.classList.add('shows__wrapper__container__location');

  const showLabelLocation = document.createElement('p');
  showLabelLocation.classList.add('shows__wrapper__container__location__label');
  showLabelLocation.textContent = 'LOCATION';

  const showLabelLocationText = document.createElement('p');
  showLabelLocationText.classList.add('shows__wrapper__container__location__text');
  showLabelLocationText.textContent = showsObj.location;

  const newButton = document.createElement('button');
  newButton.textContent = "BUY TICKETS";
  newButton.classList.add('shows__wrapper__container__btn');

  const divider2 = document.createElement('div');
  divider2.classList.add('shows__wrapper__container__divider2');
  const divider = document.createElement('hr');

  showContainerDate.appendChild(showLabelDate);
  showContainerDate.appendChild(showLabelDateText);
  showContainerVenue.appendChild(showLabelVenue);
  showContainerVenue.appendChild(showLabelVenueText);
  showContainerLocation.appendChild(showLabelLocation);
  showContainerLocation.appendChild(showLabelLocationText);
  showContainerDate.appendChild(showLabelDateText);
  showContainerVenue.appendChild(showLabelVenueText);
  showContainerLocation.appendChild(showLabelLocationText);
  showContainer.appendChild(showContainerDate);
  showContainer.appendChild(showContainerVenue);
  showContainer.appendChild(showContainerLocation);
  showContainer.appendChild(newButton);
  showContainer.appendChild(divider2);
  divider2.appendChild(divider);

  const showsWrapper = document.querySelector('.shows__wrapper');
  showsWrapper.appendChild(showContainer);

  const divider1 = document.createElement('div');
  divider1.classList.add('shows__wrapper__container__divider1');
  divider1.appendChild(divider);
  showsWrapper.appendChild(divider1);
}

