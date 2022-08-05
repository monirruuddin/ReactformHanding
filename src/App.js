import React, { useState } from "react";
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import{Container,Button,Row,Col,Form} from 'react-bootstrap';

function App() {
 
  const initialDate= {
    fullName: "",
    UserName: "",
    email: "",
    date: "",
    password: "",
    confirmPassWord: "",
    url: "",
    slug: "",
  }
  const [dateStore,setdateStore]= useState(initialDate);
  const [errorStore,seterrorStore]= useState(null);
  const [useSubmit,setuseSubmit]= useState(false);
  const  {fullName,UserName,email,date,password,confirmPassWord,url,slug}= dateStore

  const inputHandling =(e)=>{
    const {name,value}= e.target;
    setdateStore({
      ...dateStore,
      [name]: value,
    })
    
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(dateStore);
    
    
  }


  return (
    <Container className="app">
      <h2>Form Handling</h2>
        <Row>
          <Col>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                  <Form.Label>Full name</Form.Label>
                  <Form.Control type="text" name="fullName" value={fullName} onChange={inputHandling}/>
              </Col>
              <Col>
                  <Form.Label>User Name</Form.Label>
                  <Form.Control type="text" name="UserName" value={UserName} onChange={inputHandling}/>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={email} onChange={inputHandling}/>
              </Col>
              <Col>
                <Form.Label>Bithday Of Date</Form.Label>
                <Form.Control type="date" name="date" value={date} onChange={inputHandling}/>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={password} onChange={inputHandling}/>
              </Col>
              <Col>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" name="confirmPassWord" value={confirmPassWord} onChange={inputHandling}/>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>URL</Form.Label>
                <Form.Control type="text" name="url" value={url} onChange={inputHandling}/>
              </Col>
              <Col>
                <Form.Label>slug</Form.Label>
                <Form.Control type="text" name="slug" value={slug} onChange={inputHandling}/>
              </Col>
            </Row>
            <input type="submit" value="Submit" />
          </Form>
          </Col>
          <Col></Col>
        </Row> 
    </Container>
  );
}

export default App;
