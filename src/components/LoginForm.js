import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { logInFunc } from '../actions/actions'

import validate from '../validate/validate'
import {Button, TextField} from '@material-ui/core';
import styles from '../style/css/style'

const input = ( props ) => {
    return (
       <TextField {...props.input} 
                  type={props.type} 
                  placeholder={props.placeholder} 
                  value={props.value} 
                  variant="outlined"
                  label="Required"
                  fullWidth />
    )
}

let LoginForm = ( props ) => {
  const { valid, logInFunc } = props;
  return (
      <form onSubmit={(e)=>{  logInFunc(e.target.elements.email.value, 
                                       e.target.elements.password.value )}} 
            style={styles.formContainer}
            autoComplete="off" >

        <div style={styles.input}>
          <Field name="email" 
                 component={input} 
                 type="text"
                 placeholder="Email" /> 
        </div>
        <div style={styles.input}>
          <Field name="password" 
                 component={input} 
                 type="password"
                 placeholder="Password" /> 
        </div>
        <div>
          <Button type="submit" 
                  variant="contained" 
                  color="primary" 
                  fullWidth 
                  disabled={ valid ? false : true } //meta
          >Log IN</Button>
        </div>
      </form>
  )
}

LoginForm = reduxForm({
  form: 'LogIn',
  validate,
})(LoginForm);

export default connect( null, { logInFunc } )( LoginForm );