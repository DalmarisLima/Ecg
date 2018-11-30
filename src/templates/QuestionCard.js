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
  ListGroupItem } from 'reactstrap';

const QuestionCard = (props) => {
  return (
    <div>
      <Card >
        <CardHeader body inverse style={{ backgroundColor: '#fff', fontSize: "20px" }}>Despolarização e Repolarização</CardHeader>
        <CardBody  body inverse style={{ backgroundColor: '#F1F1F1', borderSize: '#F1F1F1' }}>
          <CardText>A função do nodo sinoatrial no coração humano é:</CardText>
      <ListGroup>
        <ListGroupItem inverse style={{ borderRadius: '15px'}}> 
           <Button  inverse style={{ 
            backgroundColor: '#fff',
            color:'#716969', 
            boxShadow: '1px 1px #888888',
            borderRadius: '15px',
            marginRight: '20px',
            padding: '5px 30px'}}>
            A</Button>
            Regular a circulação coronariana
          </ListGroupItem>
        <ListGroupItem inverse style={{ borderRadius: '15px'}}>
          <Button vertical  inverse style={{ 
             backgroundColor: '#fff',
            color:'#716969', 
            boxShadow: '1px 1px #888888',
            borderRadius: '15px',
            marginRight: '20px',
            padding: '5px 30px'}}>
            B</Button>
           Controlar a abertura e o fechamento da válvula tricúspide
        </ListGroupItem>
        <ListGroupItem inverse style={{ borderRadius: '15px'}}>
           <Button vertical  inverse style={{ 
             backgroundColor: '#fff',
            color:'#716969', 
            boxShadow: '1px 1px #888888',
            borderRadius: '15px',
            marginRight: '20px',
            padding: '5px 30px'}}>
            C</Button>
          Funcionar como marcapasso, controlando a ritmicidade cardíaca
        </ListGroupItem>
        <ListGroupItem inverse style={{ borderRadius: '15px'}}>
           <Button vertical  inverse style={{ 
             backgroundColor: '#fff',
            color:'#716969', 
            boxShadow: '1px 1px #888888',
            borderRadius: '15px',
            marginRight: '20px',
            padding: '5px 30px'}}>
            D</Button>
          Controlar a abertura e fechamento da válvula mitral
        </ListGroupItem>
        <ListGroupItem  inverse style={{ borderRadius: '15px'}}>
           <Button vertical  inverse style={{ 
            backgroundColor: '#fff',
            color:'#716969', 
            boxShadow: '1px 1px #888888',
            borderRadius: '15px',
            marginRight: '20px',
            padding: '5px 30px'}}>
            E</Button>
          Controlar a pressão diastólica da aorta

        </ListGroupItem>
      </ListGroup>
          
        </CardBody>
      </Card>
    </div>
  );
};

export default QuestionCard;