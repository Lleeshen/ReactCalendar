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
      eventObject: {
        title: null,
        desc: null,
        startDate: null,
        startTime: null,
        endDate: null,
        endTime: null,
      },
      events: [],
    };
    this.toToday = this.toToday.bind(this);
    this.moveBack=this.moveBack.bind(this);
    this.moveForward=this.moveForward.bind(this);
    this.modifyEvent=this.modifyEvent.bind(this);
    this.createEvent=this.createEvent.bind(this);
  }

  toToday() {
    this.setState({date: new Date()});
  }

  moveBack() {
    const today = this.state.date;
    this.setState({date: new Date(today.getTime()-86400000)});
  }

  moveForward() {
    const today = this.state.date;
    this.setState({date: new Date(today.getTime()+86400000)});
  }

  modifyEvent(e) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      eventObject: {
        title: this.state.eventObject.title,
        desc: this.state.eventObject.desc,
        startDate: this.state.eventObject.startDate,
        startTime: this.state.eventObject.startTime,
        endDate: this.state.eventObject.endDate,
        endTime: this.state.eventObject.endTime,
        [name]: value,
      }
    })
  }

  createEvent() {
    this.setState(function(state){
      const newEvents = this.state.events.concat(this.state.eventObject);
      console.log(this.state.eventObject);
      console.log(newEvents);
      return {
        events: newEvents,
        eventObject: {
          title: null,
          desc: null,
          startDate: null,
          startTime: null,
          endDate: null,
          endTime: null,
        },
      }
    });
  }

  render(){
    return (
      <div>
        <Header date={this.state.date} toToday={this.toToday} moveBack={this.moveBack} moveForward={this.moveForward}
           modifyEvent={this.modifyEvent} createEvent={this.createEvent}/>
      </div>
    );
  }
}

export default HomePage;
