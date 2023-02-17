import React from 'react';
import { Badge, ListGroup } from 'react-bootstrap';
import '../../assets/css/Monitoring.css';

const MonitoringTemperature = (props) => {

  const changeColor = () => {
    const temp = parseInt(props.temperature);
    let color = "";
    switch(true){
      case (temp < 15):
        color = "primary";
        break;
    case (temp < 25):
        color = "success";
        break;
    case (temp < 35):
        color = "warning";
        break;
    case (temp < 99):
        color = "danger";
        break;
    default:
        color = "secondary";
        break;
    }
    return color;
  }

    return (
        <ListGroup>
          <ListGroup.Item className='text-center'>
            <span >Label chip ID : </span> {props.id} 
          </ListGroup.Item>
          <ListGroup.Item className='text-center'>
            <span>Temperature : </span>
            <Badge bg={changeColor()}>{props.temperature} °C</Badge> 
          </ListGroup.Item>
        </ListGroup>
    );
};

export default MonitoringTemperature;