import React, { Component } from 'react';

import Link from 'next/link'

class PorfolioSection8 extends Component {

    state = {
        onLandingPage: false,
        onEmailDevelopment: false,
        onWebApp: false,
        onPhotography: false,
        isOpen : false,
    }

    render() {

        const allElement = event => {
            event.preventDefault();
            this.setState({
                onEmailDevelopment: true,
                onLandingPage: true,
                onWebApp: true,
                onPhotography: true,
            });
        }

        const emailDevelopment = event => {
            event.preventDefault();
            this.setState({
                onEmailDevelopment: true,
                onLandingPage: false,
                onWebApp: false,
                onPhotography: false,
                isOpen: true,
            });
        }

        const landingPage = event => {
            event.preventDefault();
            this.setState({
                onLandingPage: true,
                onEmailDevelopment: false,
                onWebApp: false,
                onPhotography: false,
                isOpen: true,
            });
        }

        const webApp = event => {
            event.preventDefault();
            this.setState({
                onWebApp: true,
                onLandingPage: false,
                onEmailDevelopment: false,
                onPhotography: false,
                isOpen: true,
            });
        }

        const Photography = event => {
            event.preventDefault();
            this.setState({
                onPhotography: true,
                onWebApp: false,
                onLandingPage: false,
                onEmailDevelopment: false,
                isOpen: true,
            });
        }



        return (
            <section id="protfolio" className="gallery-section wpo-protfolio-area-6 section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12 sortable-gallery">
                            <div className="gallery-filters">
                                <ul>
                                    <li><button data-filter="*" href="/" className="current" onClick={allElement}>All</button></li>
                                    <li><button data-filter=".Web-Design" href="/" onClick={emailDevelopment}>Email Development</button></li>
                                    <li><button data-filter=".Print-Design" href="/" onClick={landingPage}>Landing Pages</button></li>
                                    {/* <li><button data-filter=".Web-Application" href="/" onClick={webApp}>Web Application</button></li>               
                                    <li><button data-filter=".Photography" href="/" onClick={Photography}>Photography</button></li>  */}
                                </ul>
                            </div>
                            <div className="gallery-container gallery-fancybox masonry-gallery payra-masonary ">
                               
                               
                                <div className={this.state.onLandingPage? "grid active" : "grid" 
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                        <div className="protfolio-wrapper">
                                            <div className="wpo-protfolio-single">
                                                <div className="wpo-protfolio-img">
                                                    <img src='images/real1.png' alt="" className="img img-responsive"/>
                                                </div>
                                                <div className="wpo-protfolio-text">
                                                    <h2>Landing Page</h2>
                                                    <span>Web Development </span>
                                                    <Link href="/ProjectDetails/real"><a>View Full Work</a></Link>
                                                </div>
                                                <div className="thumb-text">
                                                    <span>04</span>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                               
                                <div className={this.state.onEmailDevelopment? "grid active" : "grid" 
                        
                             
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                        <div className="protfolio-wrapper">
                                            <div className="wpo-protfolio-single">
                                                <div className="wpo-protfolio-img">
                                                    <img src='images/project/3a.png' alt="" className="img img-responsive"/>
                                                </div>
                                                <div className="wpo-protfolio-text">
                                                    <h2>Email </h2>
                                                    <span>Email Development</span>
                                                    <Link href="/ProjectDetails/fenty"><a>View Full Work</a></Link>
                                                </div>
                                                <div className="thumb-text">
                                                    <span>03</span>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className={this.state.onEmailDevelopment? "grid active" : "grid"
                                
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                     <div className="protfolio-wrapper">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src='images/spec.png' alt="" className="img img-responsive"/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Website Development</h2>
                                                <span>WordPress . Blog</span>
                                                <Link href="/ProjectDetails/spec"><a>View Full Work</a></Link>
                                            </div>
                                            <div className="thumb-text">
                                                <span>01</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={this.state.onEmailDevelopment ? "grid active" : "grid"
                         
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                     <div className="protfolio-wrapper">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src='images/project/2a.png' alt="" className="img img-responsive"/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Transactional Email</h2>
                                                <span>Email Development</span>
                                                <Link href="/ProjectDetails/makarrt"><a>View Full Work</a></Link>
                                            </div>
                                            <div className="thumb-text">
                                                <span>02</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="protfolio-btn">
                                <Link href="/PorfolioGrid"><a className="theme-btn-s2"> Load More</a></Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PorfolioSection8;