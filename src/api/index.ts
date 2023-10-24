import axios from "axios";

export interface City {
  name: string;
  lon: number;
  lat: number;
  state?: string;
}

const instance = axios.create({
  baseURL: "http://api.openweathermap.org/",
});

axios.defaults.params = {};

instance.interceptors.request.use(
  function (config) {
    config.params.append("appid", "041d729e2bda19de368063e421adc820");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

function getDirectGeocoding(cityName: string): Promise<City> {
  let url = "geo/1.0/direct";
  const params = new URLSearchParams({ q: cityName, limit: "5" });
  return instance.get<City>(url, { params }).then(({ data }) => {
    console.log(data);
    return data;
  });
}

export { getDirectGeocoding };

//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
