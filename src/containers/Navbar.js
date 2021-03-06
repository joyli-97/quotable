import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeScreen } from '../actions'
import '../css/Navbar.css';
import photo_img from '../img/photos.png';
import home from '../img/home.png';
import grid from '../img/grid.png';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(ev) {
        this.props.dispatch(changeScreen(ev.target.dataset.name));
    }

    render() {
        const screen = this.props.state;
        let profileClass = 'navbar-icon';
        let exploreClass = 'navbar-icon';
        if (screen === 'profile') {
            profileClass += ' cur-page';
        } else if (screen === 'explore') {
            exploreClass += ' cur-page';
        }
        return (
            <div className='navbar'>
                <div className={profileClass} data-name='profile' onClick={this.handleClick}>
                    <img
                        className={screen === 'profile' ? 'cur-page' : ''}
                        data-name='profile'
                        src={photo_img}
                        alt='your profile' />
                </div>
                <div className='navbar-icon' data-name='home' onClick={this.handleClick}>
                    <img src={home} alt='home' data-name='home'/>
                </div>
                <div className={exploreClass} data-name='explore' onClick={this.handleClick}>
                    <img
                        className={screen === 'explore' ? 'cur-page' : ''}
                        data-name='explore'
                        src={grid}
                        alt='explore' />
                </div>
            </div>
        );
    }
}

export default connect()(Navbar)
