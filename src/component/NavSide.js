import React from 'react'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap'


const NavSide = () => {
    return (
        <div className='navInt' style={{ 
            display: "flex", 
             
            padding: '5px 0 5px 5px', 
            fontSize: '20px'
        }}>
            <div className='navTool'>
            <Navbar>
                <Container>
                    <Nav class="navbar navbar-dark">
                        <Navbar.Brand>WebApp</Navbar.Brand>
                    </Nav>
                    <Nav fill variant="" defaultActiveKey="/">
                        <Nav.Item>
                            <div style={{ margin: '10px' }}>
                                <NavLink 
                                    to ='/' 
                                    style={({ isActive }) => (
                                        {color: isActive ? 'black' : 'white' })}>
                                    Home
                                </NavLink>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div style={{ margin: '10px' }}>
                                <NavLink 
                                    to ='/About' 
                                    style={({ isActive }) => (
                                        {color: isActive ? 'black' : 'white' })}>
                                    About
                                </NavLink>
                            </div>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
            </div>
           
        </div>
    )
}

export default NavSide;
