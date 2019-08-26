import "sanitize.css";
import "./scss/app.scss";
import UI from "./js/ui";
import { getCities } from "./js/data";

let cities = [];
let filters = {
  searchText: "",
  hd: null,
  oneWay: null
};

document.addEventListener("DOMContentLoaded", () => {
  getCities().then(data => {
    cities = data;
    UI.renderCities(cities, filters);
  });
});

// Event Listeners

document.querySelector('input[type="text"]').addEventListener("input", e => {
  filters.searchText = e.target.value;
  UI.renderCities(cities, filters);
});

// hd enabled
document.querySelector("#hd").addEventListener("change", e => {
  const checked = e.target.checked;
  filters.hd = checked;
  UI.renderCities(cities, filters);
});

// one way enabled
document.querySelector("#oneWay").addEventListener("change", e => {
  const checked = e.target.checked;
  filters.oneWay = checked;
  UI.renderCities(cities, filters);
});
