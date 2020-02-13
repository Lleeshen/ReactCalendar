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
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      events: [],
    };
    this.toToday = this.toToday.bind(this);
    this.moveBack=this.moveBack.bind(this);
    this.moveForward=this.moveForward.bind(this);
  }

  toToday() {
    this.setState({date: new Date()});
  }

  moveBack() {
    var today = this.state.date;
    this.setState({date: new Date(today.getTime()-86400000)});
  }

  moveForward() {
    var today = this.state.date;
    this.setState({date: new Date(today.getTime()+86400000)});
  }

  render(){
    return (
      <div>
        <Header date={this.state.date} toToday={this.toToday} moveBack={this.moveBack} moveForward={this.moveForward}/>
      </div>
    );
  }
}

export default HomePage;
