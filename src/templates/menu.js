import React from 'react';
import {
  Badge, 
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Container,
  DropdownItem,
  Progress } from 'reactstrap';


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md" inverse style={{backgroundColor: '#6CB6C9'}}>
          <NavbarBrand href="/">ECG tutor</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar></Collapse>
          <a className = "text-white" href="#">Sair <i class="fas fa-sign-out-alt"></i></a>
        </Navbar>
         <Navbar  light expand="md" inverse style={{backgroundColor: '#F1F1F1'}}>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#"  inverse style={{color:'#716969'}}><i class="fas fa-home"></i> Início</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" inverse style={{color:'#716969'}}><i class="fas fa-gamepad"></i> Ranking</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret inverse style={{color:'#716969'}}>
                <i class="fas fa-book"></i> Material de Estudos
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Módulo 1 <i class="fas fa-book-reader"></i></DropdownItem>
                  <DropdownItem>Questionário 1 <i class="far fa-list-alt"></i></DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Módulo 2 <i class="fas fa-book-reader"></i></DropdownItem>
                  <DropdownItem>Questionário 2 <i class="far fa-list-alt"></i> </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret inverse style={{color:'#716969'}}>
                <i class="fas fa-chart-line"></i> Relatórios
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href='Reports.js'>Módulo 1 <i class="fas fa-chart-pie"></i></DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem>Módulo 2 <i class="fas fa-chart-pie"></i></DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="#" inverse style={{color:'#716969'}}> <i class="fas fa-question-circle"></i>Ajuda</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}