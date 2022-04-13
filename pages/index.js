import React, {Fragment} from 'react';
import Navbar5 from '../components/Navbar5'
import Hero7 from '../components/Hero7'
import ServiceSection2 from '../components/ServiceSection2'
import Footer2 from '../components/Footer2'
import PorfolioSection5 from '../components/PorfolioSection5'
import AboutArea4 from '../components/aboutarea4'
import Head from 'next/head'

const HomePage7 =() => {
    return(
        <Fragment>
            <Head>
                <title>My Portfolio</title>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-4BJLTD0RQT"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-4BJLTD0RQT');
</script>
            </Head>
            <Navbar5/>
            <Hero7 />
            <AboutArea4/>
            <ServiceSection2/>
            <PorfolioSection5/>
            <Footer2 Ftclass={'wpo-footer-area3'}/>
        </Fragment>
    )
};
export default HomePage7;