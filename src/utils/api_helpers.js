const URLBASE = "http://localhost:1337/api/";

/*
Fetch information from Strapi about information banner.
*/
export function getInformation(callback) {
  fetch(URLBASE + "informations-ruta")
    .then((response) => response.json())
    .then((data) => {
      callback(data.data.attributes);
    });
}
/*
Fetch information from Strapi about open hours.
*/
export function fetchTimeText(callback) {
  fetch(URLBASE + "oeppetider")
    .then((response) => response.json())
    .then((data) => {
      callback(data?.data?.attributes);
    });
}
