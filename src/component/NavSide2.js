import React from 'react'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap'


const NavSide2 = () => {
    return (
        <div className='navInt' style={{ 
            display: "flex", 
             
            padding: '2px 0 2px 2px', 
            fontSize: '20px'
        }}>
            <div className='navTool'>
            <Navbar>
                <Container>
                    <Nav class="navbar navbar-light">
                        <Navbar.Brand>WebApp</Navbar.Brand>
                    </Nav>
                    <Nav fill variant="" defaultActiveKey="/">
                        <Nav.Item>
                            <div style={{ margin: '10px' }}>
                                <NavLink 
                                    to ='/' 
                                    style={({ isActive }) => (
                                        {color: isActive ? 'black' : 'black' })}>
                                    Home
                                </NavLink>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div style={{ margin: '10px' }}>
                                <NavLink 
                                    to ='/About' 
                                    style={({ isActive }) => (
                                        {color: isActive ? 'black' : 'black' })}>
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

export default NavSide2;
