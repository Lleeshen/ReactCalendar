import React from 'react';
import { ListGroup, Modal, Form, Button } from 'react-bootstrap'

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editEvent: false,
    }
    this.editEvent=this.editEvent.bind(this);
    this.cancelEdit=this.cancelEdit.bind(this);
    this.confirmChange=this.confirmChange.bind(this);
    this.changeEvent=this.changeEvent.bind(this);
  }

  editEvent() {
    this.setState({editEvent: true});
  }

  cancelEdit() {
    this.setState({editEvent: false});
  }

  confirmChange(e) {
    e.preventDefault();
    console.log(this.props.newEvent);
  }

  changeEvent(e) {
    this.props.modifyEvent(e);
  }

  render() {
    const items = this.props.events.map((events,index) =>
       <ListGroup.Item action onClick={this.editEvent} as="li" key={index}>
         <h2>{events.title}</h2>
         <h3>{events.desc}</h3>
         <p> {events.startDate} {events.startTime} to {events.endDate} {events.endTime} </p>
      </ListGroup.Item>
    );
    return (
      <div>
        <ListGroup>
           {items}
        </ListGroup>
        <Modal show={this.state.editEvent} onHide={this.cancelEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Event</Modal.Title>
            <Modal.Body>
              <Form onSubmit={this.confirmChange}>
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
                <Button type="submit" variant="outline-primary">Update Event</Button>
              </Form>
            </Modal.Body>
          </Modal.Header>
        </Modal>
      </div>
    );
  }
}

export default Calendar;
