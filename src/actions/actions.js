import {createAction, handleActions} from 'redux-actions';

const signIn = createAction('SIGN_IN');

export const signInFunc = ( login, email ) => async dispatch => {
  console.log(`login: ${login}, email: ${email} `);
  dispatch(signIn( login, email ));
};

const initialState = {
  formData: [],
};

const reducer = handleActions(
  {
    [signIn]: (state, {payload}) => ({
      ...state,
      formData: [...state.formData, payload]
    })
  },
  initialState,
);

export default reducer;
