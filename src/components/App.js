import React from 'react';
import Form from './loginForm';

class App extends React.Component {
  
    submit = ( values ) => {
        console.log( values );
        console.log(JSON.stringify(values));
    }
    render() {
        return (
        <div>
            <h3>Authentication</h3>
            <Form onSubmit={this.submit}/>
        </div>
        
        )
    }
}

export default App;