/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Header from 'components/Header';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {date: new Date()};
  }
  render(){
    return (
      <div>
        <Header date={this.state.date}/>
      </div>
    );
  }
}

export default HomePage;
