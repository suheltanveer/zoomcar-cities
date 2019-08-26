import { getCities } from "./data";

export default class Store {
  static getCities() {
    let cities;

    const store = localStorage.getItem("cities");

    if (!store) {
      getCities().then(data => {
        cities = data;
        localStorage.setItem("cities", JSON.stringify(data));
      });
      return cities;
    }

    cities = JSON.parse(store);
    return cities;
  }
}
