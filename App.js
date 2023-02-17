import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import {data} from './data.js';
import {Shoes} from './Components/shoesComponent.js';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet, useParams } from 'react-router-dom'
import {MainPage} from './Pages/MainPage.js';
import {Detail} from './Pages/Detail.js';
import {About} from './Pages/About.js'
import {Cart} from './Pages/Cart.js'
import axios from 'axios'

function App() {
  let [shoes,setShoes] = useState(data);
  let [shoescount,setShoescount] = useState(0);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Link to='/detail/0'><Button variant="primary">Primary</Button></Link>
      <Link to='/cart'><Button variant="primary">Cart</Button></Link>
      <button onClick={()=>{ navigate('/detail/0') }}>이동버튼</button>

      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<MainPage shoes={shoes} setShoes={setShoes}/>}></Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>
        <Route path="/about" element={ <About/> } >  
          <Route path="member" element={ <div>멤버들</div> } />
          <Route path="location" element={ <div>회사위치</div> } />
        </Route>
        <Route path="/cart" element={ <Cart/> } /> 
        <Route path="*" element={ <div>없는페이지임</div> } />
      </Routes>
      <div className="main-bg"></div>
      
    </div>
  );
}

export default App;
