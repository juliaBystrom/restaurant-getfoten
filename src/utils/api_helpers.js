
/*
Fetch information from Strapi about information banner.
*/
export function getInformation(callback) {
  fetch( process.env.REACT_APP_URLBASE + "/api/informations-ruta")
    .then((response) => response.json())
    .then((data) => {
      callback(data.data.attributes);
    });
}
/*
Fetch information from Strapi about open hours.
*/
export function fetchTimeText(callback) {
  fetch( process.env.REACT_APP_URLBASE + "/api/oeppetider")
    .then((response) => response.json())
    .then((data) => {
      callback(data?.data?.attributes);
    });
}


export function fetchContactInfo(callback) {
  fetch( process.env.REACT_APP_URLBASE + "/api/contact-information")
    .then((response) => response.json())
    .then((data) => {
      callback(data?.data?.attributes);
    });
}

export function fetchMenues(callback) {
  // Using populate because of Strapi not returning media files otherwise.
  // Populates media fiels one level deep.
  const url = process.env.REACT_APP_URLBASE + "/api/menu?populate=*";
  fetch(url)
    .then((response) => response.json())
    .then(data => {
      const menuUrl = data?.data?.attributes?.menu?.data?.attributes?.url
      const drinkMenuUrl = data?.data?.attributes?.drink_menu?.data?.attributes?.url
      callback(menuUrl, drinkMenuUrl);
    }); 
}

export function fetchHomePageRichText(callback) {
  fetch( process.env.REACT_APP_URLBASE + "/api/homepage")
    .then((response) => response.json())
    .then((data) => {
      callback(data?.data?.attributes);
    });
}