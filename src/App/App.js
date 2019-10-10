  
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Header from '../Header/Header'

import LandingPage from '../LandingPage/LandingPage'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import IdeaList from '../IdeaList/IdeaList'
import AccountPage from '../AccountPage/AccountPage'
import CreateIdea from '../CreateIdea/CreateIdea'
import FormContext from '../FormContext/FormContext'
import './App.css'

export default class App extends Component {
  state = {
    ideaName: ''
  }

  handleIdeaName = (ideaName) => {
    console.log(ideaName)
  }

  render() {
    const value = {
      handleIdea: this.handleIdeaName
    }
    return (
      <div className='App'>
        <nav>
          <Nav />
        </nav>
        <header>
          <Header />
        </header>
        <main>
          <Route 
          exact path='/' 
          component={LandingPage} 
          />

          <Route 
          path='/sign-up' 
          component={SignUp} 
          />

          <Route 
          path='/sign-in' 
          component={SignIn} 
          />
          <FormContext.Provider value={value}>
          <Route 
          path='/idea-list' 
          component={IdeaList} 
          />
          <Route 
          path='/account' 
          component={AccountPage} 
          /> 
          <Route 
          path='/create-idea' 
          component={CreateIdea}
          />
          </FormContext.Provider>

        </main>
      </div>
    )
  }
}