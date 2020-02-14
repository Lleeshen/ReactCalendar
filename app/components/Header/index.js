import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';
import Elt from './eltStyle';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createEvent: false,
      eventObject: {
        title: null,
        desc: null,
        startDate: null,
        startTime: null,
        endDate: null,
        endTime: null,
      },
    };
    this.newEvent = this.newEvent.bind(this);
    this.cancelEvent = this.cancelEvent.bind(this);
    this.createEvent = this.createEvent.bind(this);
    this.changeEvent = this.changeEvent.bind(this);
  }

  newEvent() {
    this.setState({createEvent: true});
  }

  cancelEvent() {
    this.setState({createEvent: false});
  }

  changeEvent(e) {
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

  createEvent(e) {
    e.preventDefault();
    console.log(this.state.eventObject);
  }

  getMonthName(month) {
    switch(month) {
      case 0: return 'January'
      case 1: return 'February'
      case 2: return 'March'
      case 3: return 'April'
      case 4: return 'May'
      case 5: return 'June'
      case 6: return 'July'
      case 7: return 'August'
      case 8: return 'September'
      case 9: return 'October'
      case 10: return 'November'
      case 11: return 'December'
      default: return 'Month Error'
    }
  }

  render () {
    return (
      <div>
        <Row>
          <Col> <Elt> <h2> Calendar </h2> </Elt> </Col>
          <Col> <Elt> <Button onClick={this.newEvent} variant="primary"> Add Event </Button> </Elt> </Col>
          <Col> <Elt> <Button onClick={this.props.toToday} variant="outline-secondary">Today</Button> </Elt> </Col>
          <Col> <Elt> <Button onClick={this.props.moveBack} variant="secondary">Previous Day</Button> </Elt> </Col>
          <Col> <Elt> <Button onClick={this.props.moveForward} variant="secondary">Next Day</Button> </Elt> </Col>
          <Col lg={5}> <Elt> <h3> {this.getMonthName(this.props.date.getMonth())} {this.props.date.getDate()}, {this.props.date.getFullYear() } </h3> </Elt> </Col>
        </Row>
        <Modal show={this.state.createEvent} onHide={this.cancelEvent}>
          <Modal.Header closeButton>
            <Modal.Title>Create Event</Modal.Title>
            <Modal.Body>
              <Form onSubmit={this.createEvent}>
                <Form.Group controlId="EventTitle">
                  <Form.Label>Event Title</Form.Label>
                  <Form.Control type="text" name="title" placeholder="Title" onChange={this.changeEvent}/>
                </Form.Group>
                <Form.Group controlId="EventDescription">
                  <Form.Label>Event Description</Form.Label>
                  <Form.Control type="text" name="desc" placeholder="Description" onChange={this.changeEvent}/>
                </Form.Group>
                <Form.Group controlId="EventStartTime">
                  <Form.Label>Start time</Form.Label>
                  <Form.Control type="date" name="startDate" onChange={this.changeEvent}/>
                  <br />
                  <Form.Control type="time" name="startTime" onChange={this.changeEvent}/>
                </Form.Group>
                <Form.Group controlId="EventEndTime">
                  <Form.Label>End time</Form.Label>
                  <Form.Control type="date" name="endDate" onChange={this.changeEvent}/>
                  <br />
                  <Form.Control type="time" name="endTime" onChange={this.changeEvent}/>
                </Form.Group>
                <Button type="submit" variant="outline-primary">Create Event</Button>
              </Form>
            </Modal.Body>
          </Modal.Header>
        </Modal>
      </div>
    );
  }
}

export default Header;
