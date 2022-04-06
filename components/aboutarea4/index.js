import React from 'react';

import Link from 'next/link'

const AboutArea4 = (props) => {

  return (
    <div className="wpo-about-area-5 section-padding">
        <div className="wpo-about-wrap">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="about-s2-img">
                            <img src='images/about/about1.jpg' alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="wpo-about-text">
                            <h2>Creativity is nothing but a mind set free</h2>
                            <p>I am a HTML Email Developer/ Front End Web Developer. I have a passion for creating. I enjoy building beautiful responsive emails and websites. </p>
                            <ul>
                                <li>HTML / CSS/ JS</li>
                                <li>Litmus / Email on Acid</li>
                                <li>Adobe CC</li>
                            </ul>
                            <Link href="/doc/Bruce_Slaughter_Web_Programming.pdf"><a className="theme-btn-s2">Download CV</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutArea4;