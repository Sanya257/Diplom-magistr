import React from 'react';
import {Link} from "react-router-dom";
import './Register.css'
class Register extends React.Component {
    handleLogin=()=>{
        const data={
            login:this.login.value.trim(),
            password:this.pass.value.trim(),
            allname:this.allname.value.trim(),
            email:this.email.value.trim(),
            telephone:this.telephone.value.trim()
        };
        fetch('/api/user',{
            headers:{
                "Content-type":"application/json"
            },
            method:'post',
            body:JSON.stringify(data)
        });
    };
    render(){
        return(
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
                    <input type="text" placeholder='All Name' ref={el=>this.allname=el}/>
                    <input type="text" placeholder='E-mail' ref={el=>this.email=el}/>
                    <input type="text" placeholder='Telephone' ref={el=>this.telephone=el}/>
                    <input type="text" placeholder='Username' ref={el=>this.login=el}/>
                    <input type="text" placeholder='Password' ref={el=>this.pass=el} />
                    <button onClick={this.handleLogin}>Enter</button>
                </form>
            </section>
        )
    }
}
export default Register;