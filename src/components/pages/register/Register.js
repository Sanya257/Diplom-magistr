import React from 'react';
import {Link} from "react-router-dom";
import './Register.css'

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state={
            redirect: false
        }
    }

    handleLogin = (e) => {
        e.preventDefault();
        const data = {
            login: this.login.value.trim(),
            password: this.pass.value.trim(),
            fullname: this.fullname.value.trim(),
            email: this.email.value.trim(),
            phone: this.phone.value.trim()
        };
        fetch('/api/user', {
            headers: {
                "Content-type": "application/json"
            },
            method: 'post',
            body: JSON.stringify(data)
        });
        this.setState({
            redirect: !this.state.dropMenu
        });
    };


    render() {
        let d;
        if(this.state.redirect) {

            d = <div style={{backgroundColor: "#87bf0a"}}>Добро пожаловать!</div>;

        }
        return (
            <section className='register-section'>
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
                    {d}
                    <input type="text" placeholder='Full Name' ref={el => this.fullname = el}/>
                    <input type="text" placeholder='E-mail' ref={el => this.email = el}/>
                    <input type="text" placeholder='Phone' ref={el => this.phone = el}/>
                    <input type="text" placeholder='Username' ref={el => this.login = el}/>
                    <input type="text" placeholder='Password' ref={el => this.pass = el}/>
                    <button onClick={this.handleLogin}>Enter</button>
                </form>
            </section>
        )
    }
}

export default Register;