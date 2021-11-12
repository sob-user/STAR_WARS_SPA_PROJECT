import React, { Component } from 'react';
import starWarsLogo from '../../images/star-wars-2.svg';
import logoutLogo from '../../images/exit.svg';
import Planet from '../../images/planet.svg';
import welcome from '../../images/welcome.svg';
import './NavBar.css'

export class NavBar extends Component {
    render() {
        return (
            <div className='Navbar'>
                <img className='NavBarLogo'
                    src={starWarsLogo} 
                    alt='star wars logo'
                />
                <div className='NavBarSitemap'>
                <img className='NavBarSitemapLogo'
                    src={Planet} 
                    alt='star wars logo'
                />
                <div className='NavbarSitemapPosition'>planet: home</div>
                </div>
                <div className='NavBarSitemap'>
                <img className='NavBarSitemapLogo'
                    src={welcome} 
                    alt='star wars logo'
                />
                <div className='NavbarSitemapPosition'>salem</div>
                </div>
                <img className='NavBarLogout'
                    src={logoutLogo} 
                    alt='logout img'
                />
            </div>
        )
    }
}

export default NavBar
