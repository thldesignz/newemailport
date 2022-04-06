import React from 'react'
import Link from 'next/link'
import MobileMenu from '../../components/MobileMenu'


const Header = (props) => {
    return(	
	<div className="header-style-1">
        <div className="container">
            <div className="header-content">
                <div className="logo">
                    {/* <Link href="/" title=""><a><img src='images/logo.png' alt=""/></a></Link> */}
                </div>
                <nav className="d-lg-block d-none header-b">
                    <ul>
                        <li><Link className="active" href="/" title="">Home</Link>
                        </li>
                        <li><Link href="/AboutPage" title="">About</Link></li>
                        <li><Link  href="/PorfolioGrid">Portfolio</Link>
                            
                        </li>
                        <li><Link href="/" title="">Blog</Link>
                            
                        </li>
                        <li><Link href="/ContactPage" title="">Contact</Link></li>
                    </ul>
                </nav>
                <div className="contact">
                <div className="cart-search-contact">
                        <Link href="/ContactPage"><a className="theme-btn">Lets Talk</a></Link>
                    </div>
                </div>
                <div className="clearfix"></div>
                
            </div>
            <MobileMenu/>
        </div>
    </div>
    ) 
}

export default Header;