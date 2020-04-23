import axios from 'axios'

const REACT_APP_API_URL = "http://localhost:3001/api/v1/profile"

export default class ProfileModel {
  static update(data) {
  	let request = axios.put(`${REACT_APP_API_URL}/${profile._id}`, data)
    return request
  }

  static all = () => {
  	let request = axios.get(`${REACT_APP_API_URL}`)
  	return request
  }

}

