import React from 'react';
import { ListGroup } from 'react-bootstrap'

class Calendar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const items = this.props.events.map((events,index) =>
       <ListGroup.Item action as="li" key={index}>
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
      </div>
    );
  }
}

export default Calendar;
