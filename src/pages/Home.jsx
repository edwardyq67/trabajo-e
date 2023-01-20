import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { categoryThunk, filterNameThunk, getNuwThunk } from '../store/slices/news.slice';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';

const Home = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [search,setSearch]=useState("")
    const [numCategory,setNumCategory]=useState("")
    const news=useSelector(state=>state.new)
   useEffect(()=>{
    dispatch(getNuwThunk())
   },[])
   
   useEffect(()=>{
    axios.get("https://fakestoreapi.com/products/categories")
    .then(res=>setNumCategory(res.data))
   },[])
   
    return (
        <div>
          <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={e=>setSearch(e.target.value)}
          value={search}
        />
        <Button variant="outline-secondary"onClick={()=>dispatch(filterNameThunk(search))}>
          Button
        </Button>
      </InputGroup>
          <Row>
            <Col lg={3}>
              <ListGroup>
              {
                numCategory.map?.(numC=>(
 <ListGroup.Item key={numC} onClick={()=>dispatch(categoryThunk(numC))}>{numC}</ListGroup.Item>
                ))
              }
              </ListGroup>
            </Col>
            <Col>
            <Row  xs={2} md={4} className="g-4">
                {
                news?.map(newI=>(
                    <Col key={newI.id} onClick={()=>navigate(`/new/${newI.id}`)} >
          <Card>
            <Card.Img variant="top"  src={newI.image}/>
            <Card.Body>
              <Card.Title>{newI.title}</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
                    
                    
                    ))
            }
            </Row>
            </Col>
          </Row>
 </div>
    );
};

export default Home;