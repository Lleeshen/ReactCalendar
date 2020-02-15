import React from 'react';
import { ListGroup, Modal, Form, Button, Row, Col } from 'react-bootstrap'

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.changeEvent=this.changeEvent.bind(this);
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
           <Col> <Button value={events.id} onClick={this.props.initEvent} variant="outline-secondary"> Edit Event</Button> </Col>
           <Col> <Button value={events.id} variant="outline-secondary"> Delete Event </Button> </Col>
         </Row>
      </ListGroup.Item>
    );
    return (
      <div>
        <ListGroup>
           {items}
        </ListGroup>
        <Modal show={this.props.editEvent} onHide={this.props.cancelEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Event</Modal.Title>
            <Modal.Body>
              <Form onSubmit={this.props.confirmChange}>
                <Form.Group controlId="EventTitle">
                  <Form.Label>Event Title</Form.Label>
                  <Form.Control type="text" name="title" defaultValue={this.props.newEvent.title} onChange={this.changeEvent}/>
                </Form.Group>
                <Form.Group controlId="EventDescription">
                  <Form.Label>Event Description</Form.Label>
                  <Form.Control type="text" name="desc" defaultValue={this.props.newEvent.desc} onChange={this.changeEvent}/>
                </Form.Group>
                <Form.Group controlId="EventStartTime">
                  <Form.Label>Start time</Form.Label>
                  <Form.Control type="date" name="startDate" defaultValue={this.props.newEvent.startDate} onChange={this.changeEvent}/>
                  <br />
                  <Form.Control type="time" name="startTime" defaultValue={this.props.newEvent.startTime} onChange={this.changeEvent}/>
                </Form.Group>
                <Form.Group controlId="EventEndTime">
                  <Form.Label>End time</Form.Label>
                  <Form.Control type="date" name="endDate" defaultValue={this.props.newEvent.endDate} onChange={this.changeEvent}/>
                  <br />
                  <Form.Control type="time" name="endTime" defaultValue={this.props.newEvent.endTime} onChange={this.changeEvent}/>
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
