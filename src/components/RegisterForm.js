import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { signInFunc } from '../actions/actions'

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

let RegistrForm = ( props ) => {
  const { valid, signInFunc } = props;
  return (
      <form onSubmit={(e)=>{ signInFunc(e.target.elements.name.value, 
                                        e.target.elements.email.value,
                                        e.target.elements.password.value, 
                                        e.target.elements.password_confirm.value)}} 
            style={styles.formContainer}
            autoComplete="off">

        <div style={styles.input}>
          <Field name="name" 
                 component={input} 
                 type="text"
                 placeholder="Name" /> 
        </div>
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
        <div style={styles.input}>
          <Field name="password_confirm" 
                 component={input}  
                 type="password" 
                 placeholder="Confirm Password" />
        </div>
        <div>
          <Button type="submit" 
                  variant="contained" 
                  color="primary" 
                  fullWidth 
                  disabled={ valid ? false : true } 
          >SIGN IN</Button>
        </div>
      </form>
  )
}

RegistrForm = reduxForm({
  form: 'signIn',
  validate,
})(RegistrForm);

export default connect( null, { signInFunc } )( RegistrForm );