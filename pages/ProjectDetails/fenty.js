import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import Footer2 from '../../components/Footer2'
import ProjectSingleFenty from '../../components/ProjectSingle/fenty'
import Head from 'next/head'

const ProjectDetails =() => {
    React.useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-4BJLTD0RQT');

        gtag();
    })
    return(
        <Fragment>
            <Head>
                <title> Email</title>
            </Head>
            <Navbar5/>
            <Breadcrumbs pageTitle={'Transactional Email'} pageSub={'Project Details'}/>
            <ProjectSingleFenty />
            <Footer2 Ftclass={'wpo-footer-area3'}/>
        </Fragment>
    )
};
export default ProjectDetails;