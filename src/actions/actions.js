import {createAction, handleActions, combineActions} from 'redux-actions';
import { registerUserToServer, loginUserToServer } from '../actions/authentication'

const signIn = createAction('SIGN_IN');
const logIn = createAction('LOG_IN');
const signInToServer = createAction('REGISTER_TO_SERVER');
const logInToServer= createAction('LOGIN_TO_SERVER');

export const signInFunc = ( ...user ) => async dispatch => {
  registerUserToServer({...user})
    .then((res) => {
      console.log(' registerUserToServer: ', res.data);
      dispatch( signInToServer( {...user} ) ) 
    })
    .catch((err) => {console.log(`Error ${err}`)})
  dispatch(signIn( ...user ))
};
export const logInFunc = ( ...user ) => async dispatch => {
  loginUserToServer({...user})
    .then((res) => {
      console.log(' loginUserToServer ', res.data);
      dispatch( logInToServer( {...user} ) ) 
    })
    .catch((err) => {console.log(`Error ${err}`)})
  dispatch(logIn( ...user ))
};

const initialState = {
  formData: [],
};

const reducer = handleActions(
  {
    [combineActions(signIn, logIn, signInToServer, logInToServer)]: (state, {payload}) => ({
      ...state,
      formData: [...state.formData, payload]
    })
    // [signIn]: (state, {payload}) => ({
    //   ...state,
    //   formData: [...state.formData, payload]
    // }),
    // [logIn]: (state, {payload}) => ({
    //   ...state,
    //   formData: [...state.formData, payload]
    // }),
    // [signInToServer]: (state, {payload}) => ({ 
    //   ...state,
    //   formData: [...state.formData, payload]
    // }),
    // [logInToServer]: (state, {payload}) => ({ 
    //   ...state,
    //   formData: [...state.formData, payload]
    // }),
  },
  initialState,
);

export default reducer;