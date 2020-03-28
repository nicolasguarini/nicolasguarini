import React from 'react'
import NetlifyForm from 'react-netlify-form'

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
        const style={
            textAlign: "center",
            color: "white",
            width: "auto",
            margin: "auto",
            fontSize: "100%"
        }

        return(
                    <form name="Contact Form" id="contact-form" method="post" onSubmit={this.handleSubmit} data-netlify="true">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-8" style={{margin: "auto"}}>
                                    <ul>
                                        <li className="wow fadeInUp" data-wow-delay="1.4s">
                                            <label for="contact-name">Name :</label>
                                            <div className="textarea">
                                                <input type="text" name="name" id="contact-name" value={this.state.name} onChange={this.handleChange}></input>
                                            </div>
                                        </li>
    
                                        <li className="wow fadeInUp" data-wow-delay="1.4s">
                                            <label for="contact-email">Email :</label>
                                            <div className="textarea">
                                                <input type="email" name="email" id="contact-email" value={this.state.email} onChange={this.handleChange}></input>
                                            </div>
                                        </li>
    
                                        <li className="wow fadeInUp" data-wow-delay="1.4s">
                                            <label for="contact-project">Message :</label>
                                            <div className="textarea">
                                                <textarea name="message" id="contact-project" rows="6" value={this.state.message} onChange={this.handleChange}>

                                                </textarea>
                                            </div>
                                        </li>
                                    </ul>
    
                                    <button type="submit" name="contact-submit" id="contact-submit" className="send wow fadeInUp">Send Message</button>
                                </div>
                            </div>
                        </div>
                        </form>
        )
    }
    

    
}

export default ContactForm