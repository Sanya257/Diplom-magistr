import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
class Login extends React.Component {
    handleLogin=()=>{
        const data={
            login:this.login.value.trim(),
            pass:this.pass.value.trim()
        };

        fetch('/api/user',{
            headers:{
              'Content-type':'application/json'
            },
            method:'POST',
            body:JSON.stringify(data)
        }).then(res=>{
            return res.json();
        }).then(res=>{
           localStorage.setItem('checkUser',res.check);
        });
    };
    render(){
        return(
          <section className='login-section'>
              <header>
                  <nav>
                      <ul>
                          <li><Link to='register'>Register</Link></li>
                          <li><Link to='login'>Login</Link></li>
                      </ul>
                  </nav>
              </header>
              <h1>Sign in</h1>
              <form onSubmit={this.handleLogin} method='post'>
                  <input type="text" placeholder='Username' name='username' ref={el=>this.login=el}/>
                  <input type="text" placeholder='Password' name='password' ref={el=>this.pass=el}/>
                  <button >Enter</button>
              </form>
          </section>
        )
    }
}
export default Login;