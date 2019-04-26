import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import Home from './Home';
import { Grid, Paper } from '@material-ui/core';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Grid container style={{height: "100vh"}}>
                    <Navbar />
                    <Grid container direction="row" justify="center" alignItems="center" >
                        <Route exact path="/" component={ Home } />
                        <Grid item>
                            <Paper>
                                <Route exact path="/register" component={ RegisterForm } />
                                <Route exact path="/login" component={ LoginForm } />
                            </Paper>
                        </Grid>    
                    </Grid>    
                </Grid>
            </Router>
        )
    }
}
export default App;

