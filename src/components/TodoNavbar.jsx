import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const TodoNavbar = () => (
    <Navbar bg='light' className='justify-content-between mb-5'>
        <Navbar.Brand className='text-primary font-weight-bold'>
            My Todo App
        </Navbar.Brand>
        <Nav className="mr-sm-2">
            <NavLink exact to='/' className='nav-link text-secondary'>
                Todo
            </NavLink>
            <NavLink exact to='/about' className='nav-link text-secondary'>
                About
            </NavLink>
        </Nav>
    </Navbar>
)