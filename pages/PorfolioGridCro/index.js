import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import Footer2 from '../../components/Footer2'
import PorfolioSection9 from '../../components/PorfolioSection9'
import Head from 'next/head'


const PorfolioGridCro =() => {
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
                <title>Portfolio Cro</title>
            </Head>
            <Navbar5/>
            <Breadcrumbs pageTitle={'Portfolio'} pageSub={'Portfolio'}/>
            <PorfolioSection9/>
            <Footer2 Ftclass={'wpo-footer-area3'}/>
        </Fragment>
    )
};
export default PorfolioGridCro;