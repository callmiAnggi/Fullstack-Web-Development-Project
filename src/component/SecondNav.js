import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import React from 'react'

function SecondNav() {
  return (
    <div className='navOperator' style={{ 
        display: "flex", 
        
        padding: '5px 0 5px 5px', 
        fontSize: '20px',
        marginRight: '10px'
}}>
        <Navbar>
            <Container>
                <Nav>
                    <Nav.Item>
                        <div style={{margin:'10px', width:'100px'}}>
                        <NavLink
                        to ='/' 
                        style={({ isActive }) => (
                            {color: isActive ? 'black' : 'black' })}>
                        admin
                        </NavLink>
                        </div>
                    </Nav.Item>
                    <Nav.Item>
                        <div style={{margin:'10px'}}>
                        <NavLink
                        to ='/Add' 
                        style={({ isActive }) => (
                            {color: isActive ? 'black' : 'black' })}
                        >Add-Student
                        </NavLink>
                        </div>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default SecondNav