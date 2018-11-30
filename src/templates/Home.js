import React from 'react';
import { 
  Card, 
  Button, 
  CardHeader, 
  CardFooter, 
  CardBody,
  CardTitle, 
  CardText,
  ButtonGroup,
  ListGroup, 
  ListGroupItem,
  Table } from 'reactstrap';

const Home = (props) => {
  return (
    <div>
      <Card >
        <CardHeader body inverse style={{ backgroundColor: '#fff', fontSize: '20px', color: '#716969'}}>Feed Notícias</CardHeader>
        <CardBody  body inverse style={{ backgroundColor: '#F1F1F1', borderSize: '#F1F1F1' }}>
        </CardBody>
      </Card>

       <Card inverse style={{ marginTop:'30px' }}>
        <CardHeader body inverse style={{ backgroundColor: '#fff', fontSize: '20px', color: '#716969'}}>Próximos Eventos</CardHeader>
        <CardBody  body inverse style={{ backgroundColor: '#F1F1F1', borderSize: '#F1F1F1' }}>
        </CardBody>
      </Card>

    </div>
  );
};

export default Home;
