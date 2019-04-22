import React from 'react';
import RegisterForm from './RegisterForm';
import Navbar from './Navbar'

import Grid from '@material-ui/core/Grid';
import styles from '../style/css/style'

class App extends React.Component {
    render() {
        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={ styles.paperContainer } >
                
                <Navbar />  
                <Grid item xs={5}
                      style={ styles.formContainer} >
                    <RegisterForm />
                </Grid>

            </Grid>
        )
    }
}
export default App;

