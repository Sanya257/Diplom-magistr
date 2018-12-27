import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
class Login extends React.Component {
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
              <form method='post'>
                  <input type="text" placeholder='Username'/>
                  <input type="text" placeholder='Password'/>
                  <input type="text" placeholder='Token'/>
                  <button>Enter</button>
              </form>
          </section>
        )
    }
}
export default Login;