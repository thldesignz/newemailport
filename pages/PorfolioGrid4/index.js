import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import Footer2 from '../../components/Footer2'
import PorfolioSection8 from '../../components/PorfolioSection8'
import Head from 'next/head'

const PorfolioGrid4 =() => {
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
                <title>Portfolio </title>
            </Head>
            <Navbar5/>
            <Breadcrumbs pageTitle={'Portfolio'} pageSub={'Portfolio'}/>
            <PorfolioSection8/>
            <Footer2 Ftclass={'wpo-footer-area3'}/>
        </Fragment>
    )
};
export default PorfolioGrid4;