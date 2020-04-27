import axios from 'axios';

const REACT_APP_API_URL = "http://localhost:3001/api/v1/posts"

export default class PostModel {
  static create = (post) => {
  	let request = axios.post(REACT_APP_API_URL, post, {
      withCredentials: true
    });
    return request;
  }

  static delete = (post) => {
      let request = axios.delete(`${REACT_APP_API_URL}/${post._id}`);
      return request;
  }

  static update = (post) => {
      let request = axios.put(`${REACT_APP_API_URL}/${post._id}`, post);
      return request;
  }

  static show = (postId) => {
    let request = axios.get(`${REACT_APP_API_URL}/${postId}`);
    return request;
  }

  static user = () => {
    let request = axios.get(`${REACT_APP_API_URL}/user`, {
      withCredentials: true,
    });
    return request;
  }

  static city = (cityId) => {
    let request = axios.get(`${REACT_APP_API_URL}/city/${cityId}`);
    return request;
  }

  static all = () => {
  	let request = axios.get(`${REACT_APP_API_URL}`)
  	return request;
  }
}
