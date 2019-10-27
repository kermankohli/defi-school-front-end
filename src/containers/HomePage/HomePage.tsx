import React, { useState} from 'react';

import logo from '@images/logo.png';
import mic from '@images/mic.svg';
import newsletter from '@images/newsletter.svg';
import wiki from '@images/wiki.svg';

import "./HomePage.css";

interface IProps {
}

const HomePage: React.FunctionComponent<IProps> = () => {

  return (
    <div className={'outer-container'}>
      <img src={logo} className={'logo'}/>
      <h1>DeFi School</h1>
      <p className={'description'}>Learn about everything DeFi in one place.</p>
      <div className={'menu-container'}>
        <a className={'menu-item'} href={'https://the-defi-podcast.simplecast.com/'}>
          <h3 style={{color: '#FF6F81'}}>Podcast</h3>
          <img src={mic}/>
        </a>
        <a className={'menu-item'} href={'https://wiki.defi.school'}>
          <h3 style={{color: '#B885FC'}}>Wiki</h3>
          <img src={wiki}/>
        </a>
        <a className={'menu-item'} href={'https://defiweekly.substack.com'}>
          <h3 style={{color: '#6DF4FF'}}>Newsletter</h3>
          <img src={newsletter}/>
        </a>
      </div>
    </div>
  )
};

HomePage.defaultProps = {};

export default HomePage;
