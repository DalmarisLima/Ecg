import React from 'react';
import { 
  Container, 
  Row, 
  Col,
  Card, 
  Button, 
  CardHeader, 
  CardFooter, 
  CardBody,
  CardTitle, 
  CardText,
  ButtonGroup,
  ListGroup, 
  ListGroupItem} from 'reactstrap';

export default class Ranking extends React.Component {
  render() {
    return (
      <Container>
        <Row>
        <Col>
          <Card >
            <CardHeader body inverse style={{ backgroundColor: '#fff', fontSize: '20px', color: '#716969'}}>Perfil</CardHeader>
            <CardBody  body inverse style={{ backgroundColor: '#F1F1F1', borderSize: '#F1F1F1' }}>
            </CardBody>
          </Card>
          </Col>
          <Col>
          <Card >
            <CardHeader body inverse style={{ backgroundColor: '#fff', fontSize: '20px', color: '#716969'}}>Conquista</CardHeader>
            <CardBody  body inverse style={{ backgroundColor: '#F1F1F1', borderSize: '#F1F1F1' }}>
            </CardBody>
          </Card>
          </Col>
          <Col>
          <Card >
            <CardHeader body inverse style={{ backgroundColor: '#fff', fontSize: '20px', color: '#716969'}}>Ranking</CardHeader>
            <CardBody  body inverse style={{ backgroundColor: '#F1F1F1', borderSize: '#F1F1F1' }}>
            </CardBody>
          </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}