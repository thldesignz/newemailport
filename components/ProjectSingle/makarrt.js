import React from 'react'


const ProjectSingleMakarrt = ( props ) => {
    return(
        <div className="wpo-project-details-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="wpo-minimal-wrap">
                            <div className="wpo-minimal-img">
                                <img src='/images/project/2a.png' alt=""/>
                            </div>
                        </div>
                        <div className="wpo-project-details-list">
                            <div className="row">
                                <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="wpo-project-details-text">
                                        <span>Category</span>
                                        <h2>Email Development</h2>
                                    </div>
                                </div>
                                <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="wpo-project-details-text-3">
                                        <span>Project Date</span>
                                        <h2>25 Dec 2021</h2>
                                    </div>
                                </div>
                                <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="wpo-project-details-text">
                                        <span>Project Url</span>
                                        <h2><a target='_blank' href='https://hungry-euclid-5efafb.netlify.app/'>Click Here</a></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpo-p-details-section">
                            <p>This is an example of a transactional email that i created. This email is created with HTML and CSS. This email is fully responsive and was tested using limtmus. It displays correctly across all major email clients.  </p>
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-12">
                                    <div className="wpo-p-details-img">
                                         <img src='/images/project/2b.png' alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-12">
                                    <div className="wpo-p-details-img">
                                         <img src='/images/project/2c.png' alt=""/>
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

export default ProjectSingleMakarrt;