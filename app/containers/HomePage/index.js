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
import Calendar from 'components/Calendar';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      eventObject: {
        id: null,
        title: null,
        desc: null,
        startDate: null,
        startTime: null,
        endDate: null,
        endTime: null,
      },
      events: [],
      editEvent: false,
      deleteEvent: false,
    };
    this.toToday = this.toToday.bind(this);
    this.moveBack=this.moveBack.bind(this);
    this.moveForward=this.moveForward.bind(this);
    this.modifyEvent=this.modifyEvent.bind(this);
    this.createEvent=this.createEvent.bind(this);
    this.initEvent=this.initEvent.bind(this);
    this.cancelEdit=this.cancelEdit.bind(this);
    this.confirmChange=this.confirmChange.bind(this);
    this.confirmDelete=this.confirmDelete.bind(this);
    this.cancelDelete=this.cancelDelete.bind(this);
    this.actualDelete=this.actualDelete.bind(this);
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
        id: this.state.eventObject.id,
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

  createEvent(e) {
    this.setState(function(state){
      let hashSize = 10000;
      var newKey = Math.floor(Math.random()*hashSize);
      var usedKeys = this.state.events.map((eventObject)=>eventObject.id);
      var unique = 1;
      while(unique == 1) {
        unique = 0;
        var key;
        for(key of usedKeys) {
          if(newKey == key) {
            unique = 1;
          }
        }
        if(unique == 1) {
          newKey = Math.floor(Math.random()*hashSize);
        } else {
          break;
        }
      }
      const newEvent = {
        id: newKey,
        title: this.state.eventObject.title,
        desc: this.state.eventObject.desc,
        startDate: this.state.eventObject.startDate,
        startTime: this.state.eventObject.startTime,
        endDate: this.state.eventObject.endDate,
        endTime: this.state.eventObject.endTime,
      }
      const newEvents = this.state.events.concat(newEvent);
      console.log(newEvents);
      return {
        events: newEvents,
        eventObject: {
          id: null,
          title: "",
          desc: "",
          startDate: "",
          startTime: "",
          endDate: "",
          endTime: "",
        },
      }
    });
  }

  initEvent(e) {
    const value = event.target.value;
    const curEvent = this.state.events.filter(eventObject => eventObject.id == value)[0];
    this.setState(function(state){
      const toModify = {
        id: value,
        title: curEvent.title,
        desc: curEvent.desc,
        startDate: curEvent.startDate,
        startTime: curEvent.startTime,
        endDate: curEvent.endDate,
        endTime: curEvent.endTime,
      };
      console.log(toModify);
      return {
        editEvent: true,
        eventObject: toModify,
      }
    });
  }

  cancelEdit() {
    this.setState({editEvent: false});
  }

  confirmChange(e) {
    e.preventDefault();
    const updatedEvent = this.state.eventObject;
    this.setState(function(state){
      const updatedEvents = this.state.events.map((eventObject) => {
        if (eventObject.id == this.state.eventObject.id) {
          return updatedEvent;
        } else {
          return eventObject;
        }
      });
      console.log(updatedEvents);
      return {
        events: updatedEvents,
        editEvent: false,
      };
    });
  }

  confirmDelete() {
    const value = event.target.value;
    const curEvent = this.state.events.filter(eventObject => eventObject.id == value)[0];
    this.setState(function(state){
      const toDelete = {
        id: value,
        title: curEvent.title,
        desc: curEvent.desc,
        startDate: curEvent.startDate,
        startTime: curEvent.startTime,
        endDate: curEvent.endDate,
        endTime: curEvent.endTime,
      };
      console.log(toDelete);
      return {
        deleteEvent: true,
        eventObject: toDelete,
      }
    });
  }

  cancelDelete() {
    this.setState({deleteEvent: false});
  }

  actualDelete(e) {
    e.preventDefault();
    this.setState(function(state){
      const updatedEvents = this.state.events.filter((eventObject) => eventObject.id != this.state.eventObject.id);
      console.log(updatedEvents);
      return {
        events: updatedEvents,
        deleteEvent: false,
      };
    });
  }

  render(){
    return (
      <div>
        <Header date={this.state.date} toToday={this.toToday} moveBack={this.moveBack} moveForward={this.moveForward}
           modifyEvent={this.modifyEvent} createEvent={this.createEvent}/>
        <Calendar events={this.state.events} editEvent={this.state.editEvent} newEvent={this.state.eventObject}
           modifyEvent={this.modifyEvent} initEvent={this.initEvent} cancelEdit={this.cancelEdit} confirmChange={this.confirmChange}
           deleteEvent={this.state.deleteEvent} confirmDelete={this.confirmDelete} cancelDelete={this.cancelDelete} actualDelete={this.actualDelete}/>
      </div>
    );
  }
}

export default HomePage;
