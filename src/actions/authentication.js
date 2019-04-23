import axios from 'axios';

export const registerUser = (user) => dispatch => {
    axios.post('/api/users/register', user)
        .then((res)=>{ console.log('res') })
        .catch((err)=>{console.log(`ERROR ${err}`)})
}

export const loginUser = (user) => dispatch => {
    axios.post('/api/users/login', user)
        .then((res)=>{ console.log('res') })
        .catch((err)=>{console.log(`ERROR ${err}`)})
}

//from this file we will send an AJAX request to the node.js server