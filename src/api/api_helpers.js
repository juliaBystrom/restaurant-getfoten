const URLBASE = "http://localhost:1337/api/";

export function getInformation(callback) {
  fetch(URLBASE + "informations-ruta")
    .then((response) => response.json())
    .then((data) => {
      callback(data.data.attributes);
    });
}

export function fetchTimeText(callback) {
  fetch(URLBASE + "oeppetider")
    .then((response) => response.json())
    .then((data) => {
      callback(data?.data?.attributes);
    });
}
