import React from 'react'
import Link from 'gatsby-link'
import ReactWOW from 'react-wow'

class Navbar extends React.Component {
    constructor(){
        super()
        this.handleClickBtnMenu = this.handleClickBtnMenu.bind(this)
    }


    handleClickBtnMenu(e){
        document.getElementById('toggle').classList.toggle('on')
        document.getElementById('resize').classList.toggle('active')
    }


    render(){
        return(
          <>
        <nav>
            <span id="brand">
                <ReactWOW animation="fadeInUp">
                    <Link to="/">nicolas guarini</Link>
                </ReactWOW>
                
            </span>

            <ul id="menu">
                <ReactWOW animation="fadeInUp">
                    <li><Link to="/" title="Home">home<span>/</span></Link></li>
                </ReactWOW>
                
                <ReactWOW animation="fadeInUp" delay="0.2s">
                    <li><Link to="/about" title="About">about_me<span>/</span></Link></li>
                </ReactWOW>
                
                <ReactWOW animation="fadeInUp" delay="0.4s">
                    <li><Link to="/contact" title="Contact">contact_me<span>/</span></Link></li>
                </ReactWOW>
                
            </ul>

            <div id="toggle" role='button' tabIndex="0" onKeyDown={this.handleClickBtnMenu} onClick={this.handleClickBtnMenu}>
                <div className="span">menu</div>
            </div>

        </nav>

        <div id="resize">
            <div className="close-btn" role='button' tabIndex="0" onKeyDown={this.handleClickBtnMenu} onClick={this.handleClickBtnMenu}>close</div>

            <ul id="menu">
                <li><Link to="/" title="Home" onClick={this.handleClickBtnMenu}>home<span>/</span></Link></li>
                <li><Link to="/about" title="About" onClick={this.handleClickBtnMenu}>about me<span>/</span></Link></li>

                <li><Link to="/contact" title="About" onClick={this.handleClickBtnMenu}>contact me<span>/</span></Link></li>
            </ul>
        </div>
            </>  
        )
    }
}
        
export default Navbar