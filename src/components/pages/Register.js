import React from 'react';
import {Link} from "react-router-dom";
class Register extends React.Component {
    render(){
        return(
            <section>
                <header>
                    <nav>
                        <ul>
                            <li><Link to='register'>Register</Link></li>
                            <li><Link to='login'>Login</Link></li>
                        </ul>
                    </nav>
                </header>
                <h1>Registration</h1>
                <form>
                    <input type="text" placeholder='All Name'/>
                    <input type="text" placeholder='E-mail'/>
                    <input type="text" placeholder='Telephone'/>
                    <input type="text" placeholder='Token'/>
                    <input type="text" placeholder='Username'/>
                    <input type="text" placeholder='Password'/>
                    <button>Enter</button>
                </form>
            </section>
        )
    }
}
export default Register;