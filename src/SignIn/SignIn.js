import React, { Component } from 'react';
import { Link } from "react-router-dom"

class SignIn extends Component {
    handleSubmit = (e) => {
        // const { email, password } = e.target
        // saveCredentials(
        //   window.btoa(email.value + ':' + password.value)
        // )
    }

    render() {
      return (
        <div className='LandingPageApp'>
            
                <header>
                    <h1>Create an Account</h1>
                </header>
                <form class='signup-form' onSubmit={this.handleSubmit}>
                    
                    <section>
                        <label htmlFor="username">Email</label>
                        <input type="text" name='username' id='username' />
                    </section>
                    <section>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='password' />
                    </section>
                    <Link to = "/account">
                        <button type='submit'>Sign In</button>
                    </Link>
                </form>
            
        </div>
      );
    }
}
  
export default SignIn;