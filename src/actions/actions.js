import {createAction, handleActions, combineActions} from 'redux-actions';
import { registerUser, loginUser, getData, logOut } from './endpoint';

const signIn = createAction('SIGN_IN');
const logIn = createAction('LOG_IN');
const fetchData = createAction('FETCH_DATA');

export const signInFunc = ( user ) => async dispatch => {
  console.log( 'Registration User: ', user );
  registerUser( user )
    .then(( res ) => {
      console.log( res.data );
      dispatch(signIn( res.data ));
    })
    .catch(( err ) => {
      console.log(JSON.stringify( err ));
    })
};

export const logInFunc = ( user ) => async dispatch => {
  console.log( 'Login User: ', user);
  loginUser( user )
    .then(( res ) => {
      console.log( res.data );
      dispatch(logIn( res.data ));
    })
    .catch(( err ) => {
      console.log(JSON.stringify( err ));
    })
};

export const fetchAllData = ( ) => async dispatch => {
  getData()
    .then(( res ) => {
      console.log( 'userList: ', res.data );
      dispatch(fetchData( res.data ));
    })
    .catch(( err ) => {
      console.log(JSON.stringify( err ));
    })
}

export const logOutFunc = ( ) => {
  logOut()
    .then(( res ) => {
      console.log( 'Log Out', res.data );
    })
    .catch(( err ) => {
      console.log(JSON.stringify( err ));
    })
}

const initialState = {
  formData: [],
};

export const reducer = handleActions(
  {
    [combineActions(signIn, logIn, fetchData)]: (state, {payload}) => ({
      ...state,
      formData: [...state.formData, payload]
    }),
  },
  initialState,
);