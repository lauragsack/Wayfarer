import axios from 'axios'

const REACT_APP_API_URL = "http://localhost:3001/api/v1/user"

export default class ProfileModel {
  static update(user) {
    // changed from profile._id to user._id since we don't have a profile model
  	let request = axios.put(`${REACT_APP_API_URL}/${user._id}`, user)
    return request
  }

  // not sure we need the below method since we don't need to get all users
  static all = () => {
  	let request = axios.get(`${REACT_APP_API_URL}`)
  	return request
  }
}
