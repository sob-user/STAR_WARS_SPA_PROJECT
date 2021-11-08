import React from 'react'
import starWarsLogo from '../../images/star-wars-4.svg';
import { userIsAuthenticated } from '../../utils/logger';
import './Loader.css'

export default function Loader(props) {
    const {setLoading, setAuth} = props;

    setTimeout(() => {
        //simulate user has been logged
        //need to insert call API here
        setAuth(true);
        setLoading(false);
        userIsAuthenticated(true);
    }, 5000)

    return (
        <>
            <img 
            src={starWarsLogo} 
            alt='logo star wars'
            className='loaderStarWarsLogo'
            />
            <div className="loaderAnimation">
                <div className="loaderAnimationBlock"></div>
                <div className="loaderAnimationBlock"></div>
                <div className="loaderAnimationBlock"></div>
                <div className="loaderAnimationBlock"></div>
            </div>
            <div 
            className='loaderMessage'>
                Wait, we look if the force be with you ...
            </div>
        </>
    )
}
