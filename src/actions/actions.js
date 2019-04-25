import {createAction, handleActions, combineActions} from 'redux-actions';
import { registerUser, loginUser, getData } from '../actions/authentication'

const signIn = createAction('SIGN_IN');
const logIn = createAction('LOG_IN');
const fetchData = createAction('FETCH_DATA')

export const signInFunc = ( ...user ) => async dispatch => {
  registerUser({...user})
    .then((res) => {
      dispatch(signIn( res.data ))
    })
    .catch((err) => {
      throw(err)
    })
};

export const logInFunc = ( ...user ) => async dispatch => {
  loginUser({...user})
    .then((res) => {
      dispatch(logIn( res.data ))
    })
    .catch((err) => {
      throw(err)
    })
};

export const fetchAllData = ( ) => async dispatch => {
  getData()
    .then((res)=>{
      dispatch(fetchData(res.data))
    })
    .catch((err)=>{
      throw(err)
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
  //   [signIn]: (state, {payload}) => ({
  //     ...state,
  //     formData: [...state.formData, payload]
  //   }),
  //   [logIn]: (state, {payload}) => ({
  //     ...state,
  //     formData: [...state.formData, payload]
  //   }),
  },
  initialState,
);

// export default reducer;