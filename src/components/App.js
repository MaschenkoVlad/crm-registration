import React from 'react';
import Form from './loginForm';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import styles from '../style/css/style'

class App extends React.Component {
    submit = ( values ) => {
        console.log( values );
        console.log(JSON.stringify(values));
    }
    render() {
        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={ styles.paperContainer } >
                
                <Grid item xs={5}
                      style={ styles.formContainer} >
                    <Typography variant="h4" gutterBottom style={ styles.textHeadline } 
                    >Don't have an account?</Typography>
                    <Form onSubmit={this.submit}/>
                </Grid>    
            </Grid>
        )
    }
}
export default App;

