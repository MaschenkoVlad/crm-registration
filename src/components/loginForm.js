import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { signInFunc } from '../actions/actions'



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

const Input = ( props ) => {

    const { meta } = props;
    return (
        <Fragment>

            <input {...props.input} type={props.type} placeholder={props.placeholder} value={props.value} />

            {/* сначала проверяет, где есть какие-либо данные, хранящиеся внутри объекта error. 
            Если это так, он проверяет, взаимодействовал ли пользователь с полем ввода. 
            Если это так, то приложение вернет данные, хранящиеся внутри объекта error. */}
            {meta.error && meta.touched &&
            <div>{meta.error}</div>}

        </Fragment>
    )
}


let Form = ( props ) => {

  const { handleSubmit, pristine, submitting, signInFunc} = props;
  return (
    <form onSubmit={ (e)=>{ signInFunc(e.target.elements.login.value, 
                                       e.target.elements.email.value );
                            handleSubmit(); 
                            e.preventDefault(); }}>

        {/* Name prop действует как идентификатор поля */}
        {/* component prop ссылается на элемент html */}
      <div>
        <Field name="login" component={Input} label="Login" type="text" placeholder="Login" /> 
      </div>

      <div>
        <Field name="email" component={Input} label="Email" type="email" placeholder="Email" />
      </div>

      <div>
        <button type="submit" disabled={pristine || submitting} >Submit</button>
      </div>

    </form>
  )
}

Form = reduxForm({
  form: 'signIn',
  validate,
})(Form);

export default connect( null, { signInFunc } )( Form );