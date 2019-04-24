import axios from 'axios';

export const registerUserToServer = ( user ) => {
    return axios.post('/api/users/register', user)
}

export const loginUserToServer = ( user )  => {
    return axios.post('/api/users/login', user)
}

export const setAuthToken = ( token ) => {
    if ( token ) {
        axios.defaults.headers.common['Auth'] = token;
    }
    else {
        delete axios.defaults.headers.common['Auth'];
    }
}