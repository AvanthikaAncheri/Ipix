import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <Navbar bg="light" expand="lg" className='navbar'>
  <Container>
    <Navbar.Brand href="#home">
        <img src="/image/logo.webp" alt="" className='logo'/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className='nav-section'>
      <Nav className="me-auto">
        <Link to='/products' style={{textDecoration:"none"}}> <Nav.Link href="#home" className='nav-item'>Products</Nav.Link></Link>
        <Link to='/categories' style={{textDecoration:"none"}}> <Nav.Link href="#home" className='nav-item'>Categories</Nav.Link></Link>
        <Link to='/users' style={{textDecoration:"none"}}> <Nav.Link href="#home" className='nav-item'>Users</Nav.Link></Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header