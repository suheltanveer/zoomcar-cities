export default class UI {
  // render cities
  static renderCities(cities, filters) {
    UI.clearCities();

    const { searchText, hd, oneWay } = filters;
    let filteredCities = cities.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );
    let popularCities = [];
    let otherCities = [];

    if (searchText) {
      filteredCities = filteredCities.filter(city =>
        city.name.toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      filteredCities = cities;
    }

    if (hd !== null) {
      if (hd) {
        filteredCities = filteredCities.filter(
          city => city.hd_enabled === true
        );
      } else {
        filteredCities = filteredCities.filter(
          city => city.hd_enabled === false
        );
      }
    }

    if (oneWay !== null) {
      if (oneWay) {
        filteredCities = filteredCities.filter(
          city => city.one_way_enabled === true
        );
      } else {
        filteredCities = filteredCities.filter(
          city => city.one_way_enabled === false
        );
      }
    }

    popularCities = filteredCities.filter(city => city.popular === true);
    otherCities = filteredCities.filter(city => city.popular === false);

    UI.createPopularCities(popularCities);
    UI.createOtherCities(otherCities);
  }

  static createPopularCities(cities) {
    const parent = document.querySelector(".popular-cities");
    const titleElement = parent.previousElementSibling;

    if (cities.length === 0) {
      titleElement.style.display = "none";
      return;
    }

    titleElement.style.display = "block";

    cities.map(city => {
      parent.appendChild(UI.createCity(city));
    });
  }

  static createOtherCities(cities) {
    const parent = document.querySelector(".other-cities");

    const titleElement = parent.previousElementSibling;

    if (cities.length === 0) {
      titleElement.style.display = "none";
      return;
    }

    titleElement.style.display = "block";

    cities.map(city => {
      parent.appendChild(UI.createCity(city));
    });
  }

  static createCity(o) {
    const element = document.createElement("li");
    element.innerHTML = `<img src="${o.icon}" /><span>${o.name}</span>`;
    return element;
  }

  static clearCities() {
    const popularCitiesElement = document.querySelector(".popular-cities");
    const otherCitiesElement = document.querySelector(".other-cities");
    popularCitiesElement.innerHTML = "";
    otherCitiesElement.innerHTML = "";
  }
}
