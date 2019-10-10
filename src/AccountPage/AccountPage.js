import React, { Component } from 'react';
import './AccountPage.css';

class AccountPage extends Component {
    render() {
      return (
        <div className='AccountApp'>
          
            <main role="main">

                <header role="banner">
                    <h1>Ideas Claimed and Created</h1>
                </header>

                <section>
                    <header>
                        <h2>Claimed Idea 1</h2>
                        <p>Idea Author 1</p>
                    </header>
                    <button>Contact Idea Maker</button>
                    <button>Give Back</button>
                </section>
                
                <section>
                    <header>
                        <h2>Created Idea Title 1</h2>
                        <p>Created Idea Info 1</p>
                    </header>
                    <button>Edit</button>
                    <button>Delete</button>
                </section>

                <section>
                    <header>
                        <h2>Created Idea Title 2</h2>
                        <p>Created Idea Info 2</p>
                    </header>
                    <button>Edit</button>
                    <button>Delete</button>
                </section>

            </main>

        </div>
      );
    }
}
  
export default AccountPage;