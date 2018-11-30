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

const Reports = (props) => {
  return (
    <div>
      <Card >
        <CardHeader body inverse style={{ backgroundColor: '#fff', fontSize: '20px', color: '#716969'}}>Conteúdos</CardHeader>
        <CardBody  body inverse style={{ backgroundColor: '#F1F1F1', borderSize: '#F1F1F1' }}>
          <Table borderless inverse style={{ borderRadius: '15px', backgroundColor:'#fff', color: '#716969'}}>
        <thead>
          <tr>
            <th >Assuntos</th>
            <th>Textos</th>
            <th>Vídeos</th>
            <th>Questionários</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Despolarização e Repolarização</th>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <th scope="row">Sistema de Condução Cardiaca</th>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <th scope="row">Derivações</th>
            <td> </td>
            <td></td>
            <td> </td>
          </tr>
        </tbody>
      </Table>
        </CardBody>
      </Card>

       <Card inverse style={{ marginTop:'30px' }}>
        <CardHeader body inverse style={{ backgroundColor: '#fff', fontSize: '20px', color: '#716969' }}>Evolução de Aprendizagem</CardHeader>
        <CardBody  body inverse style={{ backgroundColor: '#F1F1F1', borderSize: '#F1F1F1' }}>
        </CardBody>
      </Card>
    </div>
  );
};

export default Reports;
