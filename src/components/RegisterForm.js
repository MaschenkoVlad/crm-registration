import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { signInFunc } from '../actions/actions'

import {Button, TextField} from '@material-ui/core';
import styles from '../style/css/style'

const validate = ( values ) => {
    const errors = {}
    if (!values.login) {
      errors.login = 'Required'
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
                  variant="outlined" />
                  
            {meta.error && meta.touched && <div>{meta.error}</div>}
        </Fragment>
    )
}

let RegistrForm = ( props ) => {
  const { pristine, submitting, signInFunc  } = props;
  return (
      <form onSubmit={(e)=>{ signInFunc(e.target.elements.name.value, 
                                        e.target.elements.email.value,
                                        e.target.elements.password.value, 
                                        e.target.elements.password_confirm.value,
                                        ); e.preventDefault();}} 
            style={styles.formContainer}>

        <div style={styles.input}>
          <Field name="name" 
                 component={input} 
                 label="name" 
                 type="text"
                 placeholder="name" /> 
        </div>
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
        <div style={styles.input}>
          <Field name="password_confirm" 
                 component={input} 
                 label="password_confirm" 
                 type="password" 
                 placeholder="password_confirm" />
        </div>
        <div>
          <Button type="submit" variant="contained" color="primary" fullWidth disabled={pristine || submitting} >SIGN IN</Button>
        </div>
      </form>
  )
}

RegistrForm = reduxForm({
  form: 'signIn',
  validate,
})(RegistrForm);

export default connect( null, { signInFunc } )( RegistrForm );