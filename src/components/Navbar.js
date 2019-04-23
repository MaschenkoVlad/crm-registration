import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Button } from '@material-ui/core';

class Navbar extends Component {
    render() {
        return (
            <AppBar color="secondary" position="absolute" >
                <Toolbar>
                    <Button variant="contained" color="default">
                        <Link to="/">Home</Link>
                    </Button>
                    <Button variant="contained" color="default">
                        <Link to="/login">Log in</Link>
                    </Button>
                    <Button variant="contained" color="default">
                        <Link to="/register">Sign in</Link>
                    </Button>
                </Toolbar>
            </AppBar>    
        )
    }
}

export default Navbar;