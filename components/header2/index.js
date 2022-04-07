import React from 'react'
import Link  from 'next/link'
import MobileMenu from '../MobileMenu'


const Header2 = (props) => {
    return(	
	<div className={`header-style-1 ${props.headerclass}`}>
        <div className="container">
            <div className="header-content">
                <div className="logo">
                    {/* <Link href="/" title=""><a><img src='images/logo2.png' alt=""/></a></Link> */}
                </div>
                <nav className="d-lg-block d-none header-b">
                    <ul>
                        <li><Link className="active" href="/" title="">Home</Link>
                        </li>
                        {/* <li><Link href="/AboutPage" title="">About</Link></li> */}
                        <li><Link  href="/PorfolioGrid4">Portfolio</Link>
                        </li>
                        {/* <li><Link href="/" title="">Blog</Link>
                        </li> */}
                        {/* <li><Link href="/ContactPage" title="">Contact</Link></li> */}
                    </ul>
                </nav>
                
                <div className="clearfix"></div>
                
            </div>
            <MobileMenu/>
        </div>
    </div>
    )
}

export default Header2;