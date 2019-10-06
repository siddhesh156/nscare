import React, { Component } from 'react'

class NavBar extends Component {
    render(){
        return(
         
            <nav>
            <div class="nav-wrapper">
            <a class="brand-logo center">NS ORAL HEALTH CARE</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="">Login</a></li>
                <li><a href="">Register</a></li>
                <li><a href="">Appointment</a></li>
            </ul>
            </div>
            </nav>
       
        );
    }
}

export default NavBar