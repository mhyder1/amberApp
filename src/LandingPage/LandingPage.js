import React, { Component } from 'react';
// import SignUp from '../SignUp/SignUp';
// import IdeaList from '../IdeaList/IdeaList';
// import { browserHistory } from 'react-router';
import { Link } from "react-router-dom"



class LandingPage extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isSignUpRendered: false,
    //         isIdeaListRendered: false
    //     }
    //     this.handleSignUpClick = this.handleSignUpClick.bind(this);
    //     this.handleIdeaListClick = this.handleIdeaListClick.bind(this);
    // }

    // handleSignUpClick(){
    //     // this.setState(state => ({
    //     //     isSignUpRendered: !state.isSignUpRendered
    //     //   }));
    //     // browserHistory.push('/sign-up');
    // }

    // handleIdeaListClick(){
    //     // this.setState(state => ({
    //     //     isIdeaListRendered: !state.isIdeaListRendered
    //     //   }));
    //     // browserHistory.push('/idea-list');

    // }

    // onClick={this.handleSignUpClick}
    // onClick={this.handleIdeaListClick}
    
    

    render() {
      return (
        <div className='LandingPageApp'>
            <main role="main">
                    
                <div className='container'>
                        <section>
                            <header>
                                <h3>For Those That Are Full Of Ideas...</h3>
                            </header>
                        
                            <p>Have you ever felt that you have one (or a ton) of ideas but don't have the skills or time
                                to implement them?  You can put them up for someone to claim and you can collaborate with 
                                someone that wants to bring your idea to life!
                            </p>

                            <Link to='sign-up'>
                                <button> 
                                    Sign Up And Leave Some Ideas!
                                </button>
                            </Link>
                            
                        </section>
                        
                        <section>
                            <header>
                                <h3>For Those Looking to Create...</h3>
                            </header>
                            <p>
                                Do you enjoy building projects but run short of ideas?  Do you just want to lend your skills to bring the next big idea to light?
                            </p>

                            <Link to ="/idea-list">
                                <button>
                                    See And Claim Some Ideas!
                                </button>
                            </Link>
                        </section>
                </div>
            </main>
        </div>
      );
    }
}
  
export default LandingPage;