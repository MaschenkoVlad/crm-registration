import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { logInFunc } from '../actions/actions'

import {Button, TextField} from '@material-ui/core';
import styles from '../style/css/style'

const validate = ( values ) => {
    const errors = {}
    if (!values.password) {
      errors.password = 'Required'
    } 
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    return errors
  }

const input = ( props ) => {
    const { meta } = props;
    return (
        <Fragment>
            <TextField {...props.input} 
                  type={props.type} 
                  placeholder={props.placeholder} 
                  value={props.value} 
                  variant="outlined" 
                  fullWidth />
          
            {meta.error && meta.touched && <div>{meta.error}</div>}
        </Fragment>
    )
}

let LoginForm = ( props ) => {
  const { pristine, submitting, logInFunc } = props;
  return (
      <form onSubmit={(e)=>{ logInFunc(e.target.elements.email.value, 
                                       e.target.elements.password.value ); 
                                       e.preventDefault();}} 
            style={styles.formContainer}  >

        <div style={styles.input}>
          <Field name="email" 
                 component={input} 
                 label="email" 
                 type="text"
                 placeholder="email" /> 
        </div>
        <div style={styles.input}>
          <Field name="password" 
                 component={input} 
                 label="password" 
                 type="password"
                 placeholder="password" /> 
        </div>
        <div>
          <Button type="submit" variant="contained" color="primary" fullWidth disabled={pristine || submitting} >Log IN</Button>
        </div>
      </form>
  )
}

LoginForm = reduxForm({
  form: 'LogIn',
  validate,
})(LoginForm);

export default connect( null, { logInFunc } )( LoginForm );