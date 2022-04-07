import React from 'react'


const ProjectSingleReal = ( props ) => {
    return(
        <div className="wpo-project-details-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="wpo-minimal-wrap">
                            <div className="wpo-minimal-img">
                                <img src='/images/real1.png' alt=""/>
                            </div>
                        </div>
                        <div className="wpo-project-details-list">
                            <div className="row">
                                <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="wpo-project-details-text">
                                        <span>Category</span>
                                        <h2>Web Development</h2>
                                    </div>
                                </div>
                                <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="wpo-project-details-text-3">
                                        <span>Project Date</span>
                                        <h2>30 Jan 2022</h2>
                                    </div>
                                </div>
                                <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="wpo-project-details-text">
                                        <span>Project Url</span>
                                        <h2><a target='_blank' href='https://guileless-tapioca-e702c3.netlify.app/'>Click Here</a></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpo-p-details-section">
                            <p>This is an example of a landing page for a real estate company. The site is fully responsive its built using HTML, CSS, and JavaScript. The landing page is complete i will be adding more pages to project in the days to come.  </p>
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-12">
                                    <div className="wpo-p-details-img">
                                         <img src='/images/real1.png' alt=""/>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        {/* <div className="wpo-p-details-quote">
                            <p>Sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary net Essential book for you. </p>
                            <span>Robert Luee Happy</span>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSingleReal;