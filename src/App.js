import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import data from './data';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import DetailPage from './routes/Detail';
import axios from 'axios';

function App() {
  
  let [shose,setShose] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">다있소</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{navigate("/")}}>메인</Nav.Link>
              <Nav.Link onClick={()=>{navigate("/detail")}}>상세페이지</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
          <div className='main-bg'></div>
          <div className='container'>
            <div className='row'>
              {
                shose.map(function(a, i){
                  return (
                    <상품카드 title={a.title} price={a.price} id={a.id}/>
                  )
                })
              }
            </div>
          </div>
          <button onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data2.json').then((result)=>{
              let copy = [...shose, ...result.data]
              setShose(copy);
            })
          }}>더보기</button>
          </>
        }/>
        <Route path='/detail/:id' element={<DetailPage shose={shose}/>}/>
      </Routes>
      
    </div>
  );
}

function 상품카드(props){

  let navigate = useNavigate();

  return (
    <div className='col-md-4' onClick={()=>{navigate("/detail/"+props.id)}}>
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.id + 1) + ".jpg"} width='80%'/>
      <h4>{props.title}</h4>
      <p>{props.price}</p>
    </div>
  )
}



export default App;