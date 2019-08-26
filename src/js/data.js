import axios from "axios";

export const getCities = () => {
  const url = "https://api.zoomcar.com/v4/cities?platform=web";
  return axios
    .get(url)
    .then(res => res.data.cities)
    .catch(err => {
      console.log(err);
    });
};
