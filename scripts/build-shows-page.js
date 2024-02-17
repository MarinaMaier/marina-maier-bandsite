import { getApiKey } from './band-site-api.js'
import { BandSiteApi } from './band-site-api.js';

const apiKey = await getApiKey(); 
getAndDisplayShows();

async function getAndDisplayShows() {
  try {
    const shows = await new BandSiteApi(apiKey).getShows(); 
    console.log(shows)
    for (const index in shows) {
      displayShows(shows[index]);
    }
  } catch (error) {
    console.error('Failed getting shows:', error);
  }
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
  showLabelDateText.textContent = new Date(showsObj.date).toLocaleDateString();

  const showContainerVenue = document.createElement('div');
  showContainerVenue.classList.add('shows__wrapper__container__venue');

  const showLabelVenue = document.createElement('p');
  showLabelVenue.classList.add('shows__wrapper__container__venue__label');
  showLabelVenue.textContent = 'VENUE';

  const showLabelVenueText = document.createElement('p');
  showLabelVenueText.classList.add('shows__wrapper__container__venue__text');
  showLabelVenueText.textContent = showsObj.place;

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