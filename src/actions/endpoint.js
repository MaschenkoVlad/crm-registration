import axios from 'axios';

const apiUrl = 'http://localhost:5000';

export const registerUser = ( newUser ) => {
    return axios.post(`${apiUrl}/auth/register`, newUser)
}

export const loginUser = ( user )  => {
    return axios.post(`${apiUrl}/auth/login`, user )
}

export const getData = () => {
    return axios.get(`${apiUrl}/auth`)
}

export const logOut = () => {
    return axios.get(`${apiUrl}/`)
}