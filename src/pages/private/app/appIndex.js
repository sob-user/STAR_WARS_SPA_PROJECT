import React, { Component } from 'react';
import './appIndex.css';
import NavBar from '../../../components/navbar/NavBar';
import Menu from '../menu/Menu';

export class AppIndex extends Component {
    render() {
        return (
            <div className='AppIndex'>
                <NavBar />
                <Menu />
            </div>
        )
    }
}

export default AppIndex
