import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import Footer2 from '../../components/Footer2'
import ProjectSingleMakarrt from '../../components/ProjectSingle/real'
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
                <title>Landing Page</title>
            </Head>
            <Navbar5/>
            <Breadcrumbs pageTitle={'Landing Page'} pageSub={'Project Details'}/>
            <ProjectSingleMakarrt/>
            <Footer2 Ftclass={'wpo-footer-area3'}/>
        </Fragment>
    )
};
export default ProjectDetails;