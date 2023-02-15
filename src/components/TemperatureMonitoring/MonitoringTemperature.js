import React from 'react';
import { Badge, ListGroup } from 'react-bootstrap';
import '../../assets/css/Monitoring.css';

const MonitoringTemperature = (props) => {

    return (
        <ListGroup>
          <ListGroup.Item className='text-center'>
            <span >Label chip ID : </span> {props.id} 
          </ListGroup.Item>
          <ListGroup.Item className='text-center'>
            <span>Temperature : </span>
            <Badge bg="warning">{props.temperature} °C</Badge> 
          </ListGroup.Item>
        </ListGroup>
    );
};

export default MonitoringTemperature;