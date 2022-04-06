import React from 'react'
import Link from 'next/link'



const ServiceSection2 = (props) => {
    return(
        <div className="work-area section-padding">
            <div className="container">
                <div className="col-12">
                    <div className="section-title-2 text-center">
                        <h2>Some of my skills.</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                            <img src='images/svg/screwdriver-wrench-solid.svg' alt=""/>
                            </div>
                            <div className="work-content">
                                <h2>Testing</h2>
                                <p>Testing emails on over 100+ email clients using litmus and email on acid and on on real devices.</p>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <img src='images/svg/palette-solid.svg' alt=""/>
                            </div>
                            <div className="work-content">
                                <h2>Adobe Creative Suite</h2>
                                <p>Experince using all adobe suite products..</p>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <img src='images/svg/code-solid.svg' alt=""/>
                            </div>
                            <div className="work-content">
                                <h2>Email Development</h2>
                                <p>Clean code HTML structure.</p>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <img src='images/svg/display-solid.svg' alt=""/>
                            </div>
                            <div className="work-content">
                                <h2>Landing Pages</h2>
                                <p>Create fully responsive landing pages.</p>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <img src='images/svg/laptop-solid.svg' alt=""/>
                            </div>
                            <div className="work-content">
                                <h2>CMS</h2>
                                <p>I can help with CMS such as shopify.</p>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <img src='images/svg/wand-magic-sparkles-solid.svg' alt=""/>
                            </div>
                            <div className="work-content">
                                <h2>Graphic Design</h2>
                                <p>Can hlep with your design needs if needed.</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection2;