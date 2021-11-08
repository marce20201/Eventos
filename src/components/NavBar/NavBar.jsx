import React from 'react';
import { Navbar,Container,Nav,/*NavDropdown,*/ NavbarBrand} from 'react-bootstrap';
import{NavLink} from 'react-router-dom'
import CartWidget from "../Cart/CartWidget/CartWidget";
import './NavBar.css';

export default function NavBar() {
return (
    
<>
<Navbar bg="none" expand="sm">
  <Container>
    <NavbarBrand><NavLink to="/"><img src='https://i.ibb.co/5284vPr/paginainicio.jpg' width="25%"alt="logo" /></NavLink></NavbarBrand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto navegacion">
        <Nav.Link ><NavLink to="/" className='link-nav'  exact activeClassName="link-activo">Inicio</NavLink></Nav.Link>
        <Nav.Link ><NavLink to="/category/bebes" className='link-nav'  exact activeClassName="link-activo">Bebés</NavLink></Nav.Link>
        <Nav.Link ><NavLink to="/category/girl" className='link-nav'  exact activeClassName="link-activo">Niñas</NavLink></Nav.Link>
        <Nav.Link ><NavLink to="/category/boy" className='link-nav'  exact activeClassName="link-activo">Niños</NavLink></Nav.Link>
        <Nav.Link ><NavLink to="/category/ofertas" className='link-nav'  exact activeClassName="link-activo">Ofertas</NavLink></Nav.Link>
        <Nav.Link ><NavLink to="/contacto" className='link-nav'  exact activeClassName="link-activo">Contacto</NavLink></Nav.Link>
        <CartWidget/>

        {/* <NavDropdown title="Bebés" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">0 a 3 meses</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">6 a 9 meses</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">9 a 12 meses</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Niñas" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">2T</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">3T</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">4T</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">5T</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Niños" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">2T</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">3T</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">4T</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">5T</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Ofertas" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Bebés</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Niñas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Niños</NavDropdown.Item>
        </NavDropdown> */}
        
      </Nav>
    </Navbar.Collapse>
  </Container>
  
</Navbar>
</>

)
}