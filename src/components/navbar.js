import React from 'react'
import Link from 'gatsby-link'

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
                <Link to="/" className="wow fadeInUp">nicolas guarini</Link>
            </span>

            <ul id="menu">
                <li><Link to="/" title="Home" className="wow fadeInUp">home<span>/</span></Link></li>

                <li><Link to="/about" title="About" className="wow fadeInUp">about me<span>/</span></Link></li>

                <li><Link to="/contact" title="Contact" className="wow fadeInUp">contact me<span>/</span></Link></li>
            </ul>

            <div id="toggle" onClick={this.handleClickBtnMenu}>
                <div className="span">menu</div>
            </div>

        </nav>

        <div id="resize">
            <div className="close-btn" onClick={this.handleClickBtnMenu}>close</div>

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