import React from 'react';
import {Link} from 'react-router-dom';
class Login extends React.Component {
    handleLogin=(e)=>{
e.preventDefault();
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
          <section>
              <header>
                  <nav>
                      <ul>
                          <li><Link to='register'>Register</Link></li>
                          <li><Link to='login'>Login</Link></li>
                      </ul>
                  </nav>
              </header>
              <h1>Sign in</h1>
              <form onSubmit={this.handleLogin}>
                  <input type="text" placeholder='Username' ref={el=>this.login=el}/>
                  <input type="text" placeholder='Password' ref={el=>this.pass=el}/>
                  <button >Enter</button>
              </form>
          </section>
        )
    }
}
export default Login;