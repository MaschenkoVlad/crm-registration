import {createAction, handleActions} from 'redux-actions';

const signIn = createAction('SIGN_IN');
const logIn = createAction('LOG_IN');

export const signInFunc = ( name, email, pass, passConfirm ) => async dispatch => {
  dispatch(signIn( name, email, pass, passConfirm ));
};
export const logInFunc = ( email, pass ) => async dispatch => {
  dispatch(logIn( email, pass ));
};

const initialState = {
  formData: [],
};

const reducer = handleActions(
  {
    [signIn]: (state, {payload}) => ({
      ...state,
      formData: [...state.formData, payload]
    }),
    // [logIn]: (state, {payload}) => ({
    //   ...state,
    //   formData: [...state.formData, payload]
    // }),
  },
  initialState,
);

export default reducer;

