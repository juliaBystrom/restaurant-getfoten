
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

export function fetchMenu(callback) {
  const url = process.env.REACT_APP_URLBASE + "/api/menu?populate=meny";
  fetch(url)
    .then((response) => response.json())
    .then(data => {
      const menuData = data?.data?.attributes?.meny?.data?.attributes
      callback(menuData);
    }); 
}

export function fetchHomePageRichText(callback) {
  fetch( process.env.REACT_APP_URLBASE + "/api/homepage")
    .then((response) => response.json())
    .then((data) => {
      callback(data?.data?.attributes);
    });
}