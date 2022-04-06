import React from 'react'
import Link from 'next/link'

const Hero1 = () => {
    return(
        <section className="wpo-hero-style-2" >
            <div className="wpo-slide-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col col-md-8 slide-caption">
                            <h2>I’m <span>Jae</span> Slaughter</h2>
                            <p>Web Developer</p>
                            <p>& Graphic Designer</p>
                            <div className="bg-social">
                                <ul>
                                <li><Link href="https://www.instagram.com/thldesignz/"><a><i className="fa fa-instagram"></i></a></Link></li>
                                    <li><Link href="http://www.twitter.com/flawlesss_jade"><a><i className="fa fa-twitter" aria-hidden="true"></i></a></Link></li>
                                    <li><Link href="https://www.instagram.com/flawless_jadee/"><a><i className="fa fa-instagram" aria-hidden="true"></i></a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wpo-slide-right-img">
                    <div className="slide-img">
                        <img src='images/slider/hero-shape-1a.jpg' alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero1;