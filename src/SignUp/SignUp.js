import React, { Component } from 'react';
import { Link } from "react-router-dom";

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName:{
                value: ''
            },
            lastName : {
                value:''
            },
            userName: {
                value: ''
            },
            email: {
                value: ''
            },
            password: {
                value: ''
            },
            repeatPassword: {
                value: ''
            }
        }
    }

    updateFirstName(firstName) {
        this.setState({firstName: {value: firstName}});
    }

    updateLastName(lastName) {
        this.setState({lastName: {value: lastName}});
    }

    updateUserName(userName) {
        this.setState({userName: {value: userName}});
    }
      
    updateEmail(email) {
        this.setState({email: {value: email}});
    }

    updatePassword(password) {
        this.setState({password: {value: password}});
    }

      
    updateRepeatPassword(repeatPassword) {
        this.setState({password: {value: repeatPassword}});
    }

    handleSubmit(event) {
        event.preventDefault();
        const { firstName, lastName, userName, email, password, repeatPassword } = this.state;
    
        console.log('First Name: ', firstName.value);
        console.log('Last Name: ', lastName.value);
        console.log('User Name: ', userName.value);
        console.log('Email: ', email.value);
        console.log('Password: ', password.value);
        console.log('Repeat Password: ', repeatPassword.value);
    
        //potentially submit these values to the server here
    
    }

    render() {
      return (
        <div className='SignUpApp'>
            <header>
                <h1>Create an Account</h1>
            </header>
            <form className='signup-form' onSubmit={e => this.handleSubmit(e)}>
                <section>
                    <label htmlFor="first-name">First name</label>
                    <input 
                    placeholder='First Name' 
                    type="text" 
                    name='firstName' 
                    id='firstName'
                    onChange={e => this.updateFirstName(e.target.value)}
                    required />
                </section>

                <section>
                    <label htmlFor="last-name">Last name</label>
                    <input 
                    type="text" 
                    name='lastName' 
                    id='lastName' 
                    placeholder='Last Name'
                    onChange={e => this.updateLastName(e.target.value)}
                    required />
                </section>

                <section>
                    <label htmlFor="username">Username</label>
                    <input 
                    type="text" 
                    name='userName' 
                    id='userName' 
                    placeholder='Create a username'
                    onChange={e => this.updateUserName(e.target.value)} 
                    required/>
                </section>

                <section>
                    <label htmlFor="username">Email</label>
                    <input 
                    type="text" 
                    name='email' 
                    id='email'
                    onChange={e => this.updateEmail(e.target.value)}/>
                </section>

                <section>
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    name='password' 
                    id='password'
                    onChange={e => this.updatePassword(e.target.value)} />
                </section>

                <section>
                    <label htmlFor="password">Repeat Password</label>
                    <input 
                    type="password" 
                    name='repeatPassword' 
                    id='repeatPassword'
                    onChange={e => this.updateRepeatPassword(e.target.value)} />
                </section>
                <Link to="/account">
                    <button type='submit'>Sign Up</button>
                </Link>
            </form>
            
        </div>
      );
    }
}
  
export default SignUp;