import React from 'react'
import ReactWOW from 'react-wow'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
}

class ContactForm extends React.Component {
    constructor(){
        super()
         this.state = {
             name: ' ',
             email: ' ',
             message: ' '
         }
    }

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "Contact Form", ...this.state })
        })
         .then(() => {
                alert("Success!")
                this.setState({
                    name: ' ',
                    email: ' ', 
                    message: ' '
                })
            })
         .catch(error => alert(error))
         
        e.preventDefault()
    }

    handleChange = e => this.setState({
        [e.target.name]: e.target.value 
    })

    render(){
        return(
            <form name="Contact Form" id="contact-form" method="post" onSubmit={this.handleSubmit} data-netlify="true">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8" style={{margin: "auto"}}>
                            <ul>
                                <ReactWOW animation="fadeInUp" delay="0.1s">
                                    <li>
                                        <label htmlFor="contact-name">Name :</label>
                                        <div className="textarea">
                                            <input type="text" name="name" id="contact-name" value={this.state.name} onChange={this.handleChange}></input>
                                        </div>
                                    </li>
                                </ReactWOW>
                                
                                <ReactWOW animation="fadeInUp" delay="0.3s">
                                    <li>
                                        <label htmlFor="contact-email">Email :</label>
                                        <div className="textarea">
                                            <input type="email" name="email" id="contact-email" value={this.state.email} onChange={this.handleChange}></input>
                                        </div>
                                    </li>
                                </ReactWOW>
                                <ReactWOW animation="fadeInUp" delay="0.5s">
                                    <li>
                                        <label htmlFor="contact-project">Message :</label>
                                        <div className="textarea">
                                            <textarea name="message" id="contact-project" rows="6" value={this.state.message} onChange={this.handleChange}>

                                            </textarea>
                                        </div>
                                    </li>
                                </ReactWOW>
                                

                                
                            </ul>
                            <ReactWOW animation="fadeInUp" delay="0.7s">
                                <button type="submit" name="contact-submit" id="contact-submit" className="send">Send Message</button>
                            </ReactWOW>

                            
                        </div>
                    </div>
                </div>
            </form>
        )
    }
    

    
}

export default ContactForm