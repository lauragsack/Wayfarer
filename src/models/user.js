import axios from 'axios'

export default class UserModel {
    static create(data) {
        let request = axios.post("http://localhost:3001/api/v1/auth/signup", data)
        return request;
    }
}