import React from 'react'
import Link  from 'next/link';


const Hero7 = ( props ) => {
    return(
        <section className="wpo-hero-style-6">
            <div className="wpo-slide-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-8 col-md-7 slide-caption">
                            <h2 className="wow fadeInLeftSlow" data-wow-delay="0.5s">Jae Slaughter</h2>
                            <span className="wow fadeInUp" data-wow-delay="0.8s">Email Developer </span>
                            <div className="wow fadeInUp" data-wow-delay="1.0s">
                                <div className="hero-btn">
                                    <Link href="/AboutPage"><a className="theme-btn-s2">More About</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero7;