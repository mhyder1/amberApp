import React, { Component } from 'react';
import './CreateIdea.css';
import FormContext from '../FormContext/FormContext'

class CreateIdea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formControls: {

            ideaName: {
                value: ''
            },
            ideaSummary:{
                value: ''
            },
            authorName: {
                value: ''
            },
            contactInfo: {
                value: ''
            }
        }

           
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}
    static contextType = FormContext
    

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          formControls:{
              ...this.state.formControls,
              [name]: {
                ...this.state.formControls[name], 
                value
              }
          }
        });
    }

   
    handleSubmit = (event) => {
        // alert(`${this.state.formControls.ideaName.value} was submitted`) 
        event.preventDefault();
        this.context.handleIdea(this.state.formControls.ideaName.value)
        this.props.history.push('/')
    }

    
    render() {
        console.log(this.context)
      return (
        <div className='CreateIdeaApp'>
          <main role="main">
                <header>
                    <h1>New Idea</h1>
                </header>

                <section>
                        <form id="submit-idea" onSubmit={this.handleSubmit}>

                            <div className="form-section">
                                <label htmlFor="idea-name">Idea Name</label>
                                <input 
                                type="text"
                                value={this.state.formControls.ideaName.value} 
                                onChange={this.handleChange}
                                name="ideaName"
                                required />
                            </div>

                            <div className="form-section">
                                <label htmlFor="idea-summary">Idea Summary</label>
                                <textarea 
                                value={this.state.formControls.ideaSummary.value}  
                                rows="15"
                                onChange={this.handleChange}
                                name="ideaSummary"
                                required />
                            </div>

                            <div className="author-name-container form-section">
                                <label htmlFor="contact-info">Author Name</label>
                                <input 
                                type="text" 
                                name="authorName"
                                value={this.state.formControls.authorName.value}
                                onChange={this.handleChange} 
                                required />
                            </div>

                            <div className="contact-info-container form-section">
                                <label htmlFor="contact-info">Contact Info</label>
                                <input 
                                type="text" 
                                name="contactInfo"
                                value={this.state.formControls.contactInfo.value} 
                                onChange={this.handleChange} 
                                required />
                            </div>

                            <button type="submit">Submit</button>
                           
                        </form>
                </section>
            </main>
        </div>
      );
    }
}
  
export default CreateIdea;