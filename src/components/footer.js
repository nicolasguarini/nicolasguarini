import React from 'react'

const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
                    <br /><br />

                    <div className="collab">
                        <div className="row">
                                <div className="col-lg-12">
                                    <p className="wow fadeInUp">Got an interesting project? I can help you.</p>
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
                                    <p className="wow fadeInUp">connect with me</p>
                                    <h4 className="wow fadeInUp" data-wow-delay="0.2s">ig @<a href="https://www.instagram.com/nicolas.guarini/" className="no-dec">nicolas.guarini</a> </h4>
                                    <br /><br />
                                </div>

                                <div className="col-lg-4" id="media">
                                    <p className="wow fadeInUp" data-wow-delay="0s">follow me</p>

                                    <ul>
                                            <li id="fb" className="wow fadeInUp" data-wow-delay="0.4s"> <a href="https://www.facebook.com/guaro.py" className="no-dec">fb</a></li>
                                            <li id="ig" className="wow fadeInUp" data-wow-delay="0.6s"><a href="https://www.instagram.com/nicolas.guarini/" className="no-dec">ig</a></li>
                                            <li id="tw" className="wow fadeInUp" data-wow-delay="0.8s"><a href="https://twitter.com/guaro_dat" className="no-dec">tw</a></li>
                                            <li id="yt" className="wow fadeInUp" data-wow-delay="1s"><a href="" className="no-dec">yt</a></li>
                                    </ul>

                                    <br /><br />
                                </div>

                                <div className="col-lg-4" id="address">
                                    <p className="wow fadeInUp" data-wow-delay="0s">say hello</p>
                                    <h4 className="wow fadeInUp" data-wow-delay="0.2s"> <a href="mailto:nicolasguarini.py@gmail.com" style={{color: "white", textDecoration: "none"}}>nicolasguarini.py@gmail.com</a></h4>
                                    <br /><br />
                                </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Footer