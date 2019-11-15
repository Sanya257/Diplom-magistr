import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import './Login.css';
class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
           chekLogin: false
        }
    }
    handleClick= (e)=>{
        e.preventDefault();
        const data = {
            login: this.login.value.trim(),
            password: this.pass.value.trim(),
        };
      fetch('api/views',{
          headers: {
              "Content-type": "application/json"
          },
          method:'post',
          body:JSON.stringify(data)
      }).then(res=>{
          debugger;
          return res.json();
      }).then(e=>{
          if (e.login && e.password){
            sessionStorage.setItem('login',true);
            this.setState({chekLogin: true});
          } else{
              alert("pososi");
          }
      });

    };
    render(){
        if(this.state.chekLogin) {

          return  <Redirect to='/'/>

        }
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
              <form method>
                  <input type="text" placeholder='Login' ref={elem=> this.login=elem}/>
                  <input type="text" placeholder='Password'ref={elem=> this.pass=elem}/>
                  <input type="text" placeholder='Token'/>
                  <button onClick={this.handleClick}>Enter</button>
              </form>
          </section>
        )
    }
}
export default Login;