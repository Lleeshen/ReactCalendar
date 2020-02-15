import React from 'react';
import { ListGroup, Modal, Form, Button, Row, Col } from 'react-bootstrap'

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
    this.setState({
      editEvent: true,
    });
  }

  cancelEdit() {
    this.setState({editEvent: false});
  }

  confirmChange(e) {
    e.preventDefault();
    console.log(event);
  }

  changeEvent(e) {
    this.props.modifyEvent(e);
  }

  render() {
    const items = this.props.events.map((events) =>
       <ListGroup.Item action as="li" key={events.id}>
         <Row>
           <Col> <h2>{events.title}</h2> </Col>
           <Col> <h3>{events.desc}</h3> </Col>
           <Col lg="4"> <h3> {events.startDate} {events.startTime} to {events.endDate} {events.endTime} </h3> </Col>
           <Col> <Button key={events.id} onClick={this.editEvent} variant="outline-secondary"> Edit Event</Button> </Col>
           <Col> <Button key={events.id} variant="outline-secondary"> Delete Event </Button> </Col>
         </Row>
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
                  <Form.Control type="text" name="title" value={this.props.newEvent.title} onChange={this.changeEvent}/>
                </Form.Group>
                <Form.Group controlId="EventDescription">
                  <Form.Label>Event Description</Form.Label>
                  <Form.Control type="text" name="desc" value={this.props.newEvent.desc} onChange={this.changeEvent}/>
                </Form.Group>
                <Form.Group controlId="EventStartTime">
                  <Form.Label>Start time</Form.Label>
                  <Form.Control type="date" name="startDate" value={this.props.newEvent.startDate} onChange={this.changeEvent}/>
                  <br />
                  <Form.Control type="time" name="startTime" value={this.props.newEvent.startTime} onChange={this.changeEvent}/>
                </Form.Group>
                <Form.Group controlId="EventEndTime">
                  <Form.Label>End time</Form.Label>
                  <Form.Control type="date" name="endDate" value={this.props.newEvent.endDate} onChange={this.changeEvent}/>
                  <br />
                  <Form.Control type="time" name="endTime" value={this.props.newEvent.endTime} onChange={this.changeEvent}/>
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
