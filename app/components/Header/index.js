import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col, Button } from 'react-bootstrap';
import HeaderStyle from './headerElt';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <Row>
        <Col> <h3> Calendar </h3> </Col>
        <Col> <Button onClick={this.handleClick} variant="outline-secondary">Today</Button> </Col>
        <Col> <Button variant="primary">Previous Day</Button> </Col>
        <Col> <Button variant="primary">Next Day</Button> </Col>
        <Col lg={8}> <h3> {this.props.date.getMonth()} {this.props.date.getFullYear() } </h3> </Col>
      </Row>
    );
  }
}

export default Header;
