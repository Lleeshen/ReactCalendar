import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import Elt from './eltStyle';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createEvent: false,
    };
    this.newEvent = this.newEvent.bind(this);
    this.cancelEvent = this.cancelEvent.bind(this);
  }

  newEvent() {
    this.setState({createEvent: true});
  }

  cancelEvent() {
    this.setState({createEvent: false});
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
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
        </Modal>
      </div>
    );
  }
}

export default Header;
