import React from 'react'
import './index.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './Home.js';
import Games from './Games.js';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Allproducts from './Allproducts';
import 'bootstrap/dist/css/bootstrap.css'
import { faHome , faShoppingCart, faPersonRifle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Productdetails from './Productdetails.js';
import Addproduct from './Addproduct.js';
export default function Navigation ()  {
  return (
    <BrowserRouter >
    <div className='firstdiv'>
         <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="">Dz Shop</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="Home"> <FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
            <Nav.Link as={Link} to="allproducts">All Products</Nav.Link>
            <Nav.Link as={Link} to="Games">Games</Nav.Link>
            <Nav.Link as={Link} to="AddProduct">Add Product</Nav.Link>
            <div className='profile'>
            <Nav.Link className='basket' as={Link} to="Basket"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
            <Nav.Link  as={Link} to="Profile"><FontAwesomeIcon icon={faPersonRifle} /></Nav.Link>
      </div>
          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path="allproducts" element={<Allproducts />}> </Route>
        <Route path="Home" element={<Home />}> </Route>
        <Route path="Games" element={<Games />}> </Route>
        <Route path="Productdetails" element={<Productdetails />}> </Route>
        <Route path="AddProduct" element={<Addproduct />}> </Route>
      </Routes>
    </div></BrowserRouter>
  )
}
