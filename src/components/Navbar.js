import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Log in</a>
                    </li> 
                    <li>
                        <a href="/">Sign in</a>
                    </li>
                </ul>
            </nav>    
        )
    }
}
export default Navbar;