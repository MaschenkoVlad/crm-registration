import axios from 'axios';

const apiUrl = 'http://localhost:3000'

export const registerUser = ( newUser ) => {
    return axios.post(`${apiUrl}/register`, newUser)
}

export const loginUser = ( user )  => {
    return axios.post(`${apiUrl}/login`, user)
}

export const getData = () => {
    return axios.get(`${apiUrl}`)
}