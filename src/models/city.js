import axios from 'axios';

const REACT_APP_API_URL = "http://localhost:3001/api/v1/cities"

export default class CityModel {
  static all = () => {
  	let request = axios.get(`${REACT_APP_API_URL}`);
  	return request;
  }

  static show = (city) => {
    let request = axios.get(`${REACT_APP_API_URL}/${city}`);
    return request;
  }
}
