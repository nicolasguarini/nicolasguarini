import React from 'react'
import ReactWOW from 'react-wow'

const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
                    <br /><br />

                    <div className="collab">
                        <div className="row">
                                <div className="col-lg-12">
                                    <ReactWOW animation="fadeInUp">
                                        <p>Got an interesting project? I can help you.</p>
                                    </ReactWOW>
                                    
                                </div>
                        </div>
                    </div>

                    <br />

                    <div className="hr">
                        <div className="row"></div>
                    </div>

                    <br /><br />

                    <div className="info">
                        <div className="row">
                                <div className="col-lg-4" id="personal">
                                    <ReactWOW animation="fadeInUp">
                                        <p>connect with me</p>
                                    </ReactWOW>
                                        
                                    <ReactWOW animation="fadeInUp" delay="0.3s">
                                        <h4 >ig @<a href="https://www.instagram.com/nicolas.guarini/" className="no-dec">nicolas.guarini</a> </h4>
                                    </ReactWOW>
                                    
                                    <br /><br />
                                </div>

                                <div className="col-lg-4" id="media">
                                    <p className="wow fadeInUp" data-wow-delay="0s">follow me</p>

                                    <ul>
                                        <ReactWOW animation="fadeInUp" delay="0.2s">
                                            <li id="fb"> <a href="https://www.facebook.com/guaro.py" className="no-dec">fb</a></li>
                                        </ReactWOW>
                                        <ReactWOW animation="fadeInUp" delay="0.4s">
                                            <li id="ig" ><a href="https://www.instagram.com/nicolas.guarini/" className="no-dec">ig</a></li>
                                        </ReactWOW>
                                        <ReactWOW animation="fadeInUp" delay="0.6s">
                                            <li id="tw"><a href="https://twitter.com/guaro_dat" className="no-dec">tw</a></li>
                                        </ReactWOW>
                                        
                                        
                                            
                                    </ul>

                                    <br /><br />
                                </div>

                                <div className="col-lg-4" id="address">
                                    <ReactWOW animation="fadeInUp" delay="0.3s">
                                        <p>say hello</p>
                                        <h4> <a href="mailto:nicolasguarini.py@gmail.com" style={{color: "white", textDecoration: "none"}}>nicolasguarini.py@gmail.com</a></h4>
                                    </ReactWOW>
                                    <br /><br />
                                </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Footer