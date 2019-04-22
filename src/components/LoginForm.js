import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { signInFunc } from '../actions/actions'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
                  style={styles.textField} 
                  InputProps={{
                    style: {
                        color: "#f5f5f5",
                        fontFamily: "Comic Sans MS",
                        fontSize: 16
                    }
                  }} />
            {/* сначала проверяет, где есть какие-либо данные, хранящиеся внутри объекта error. 
            Если это так, он проверяет, взаимодействовал ли пользователь с полем ввода. 
            Если это так, то приложение вернет данные, хранящиеся внутри объекта error. */}
            {meta.error && meta.touched && <div style={styles.errorField}>{meta.error}</div>}
        </Fragment>
    )
}

let LoginForm = ( props ) => {
  const { pristine, submitting, signInFunc  } = props;
  return (
      <form onSubmit={ (e)=>{ signInFunc(e.target.elements.email.value, e.target.elements.password.value )}} 
            autoComplete="off" >

        <div style={styles.inputBox}>
          <Field name="email" 
                 component={input} 
                 label="email" 
                 type="text"
                 placeholder="email" /> 
        </div>
        <div style={styles.inputBox}>
          <Field name="password" 
                 component={input} 
                 label="password" 
                 type="password"
                 placeholder="password" /> 
        </div>
        <div>
          <Button type="submit" 
                  disabled={pristine || submitting}  
                  fullWidth 
                  variant="contained" >Log IN</Button>
        </div>
      </form>
  )
}

LoginForm = reduxForm({
  form: 'LogIn',
  validate,
})(LoginForm);

export default connect( null, { signInFunc } )( LoginForm );