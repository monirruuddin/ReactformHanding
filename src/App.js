import React, { useState } from "react";
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import{Container,Row,Col,Form} from 'react-bootstrap';


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
  const [errorStore,seterrorStore]= useState({});
  const [useSubmit,setuseSubmit]= useState(false);
  const  {fullName,UserName,email,date,password,confirmPassWord,url,slug}= dateStore
  const templist = dateStore
  

  const inputHandling =(e)=>{
    const {name,value}= e.target;
    setdateStore({
      ...dateStore,
      [name]: value,
    })
    seterrorStore({
      ...errorStore,
      [name]: '',
    })

  }
 
  const handleSubmit =(e)=>{
    e.preventDefault();
    validatiofunc(dateStore)
  }

  function validatiofunc(dateStore){
    const errorDateStore= {
      fullName: "",
      UserName: "",
      email: "",
      date: "",
      password: "",
      confirmPassWord: "",
      url: "",
      slug: "",
    }
    let check= false;
    const  {fullName,UserName,email,date,password,confirmPassWord,url,slug}= dateStore;


    if(fullName=== ""){
      errorDateStore.fullName = "*Required";
      check= true
      
    }
    if(UserName=== ""){
      errorDateStore.UserName = "*Rquired";
      check= true
      
    }
    if(date=== ""){
      errorDateStore.date = "*Required";
      check= true
      
    }

    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(email=== ""){
      errorDateStore.email = "*Required"
      check= true;
      }else if(!regEmail.test(email)){
        errorDateStore.email = "The provided *email is not valid"
        check= true;
      }
      
    // const regPass= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    const regPass= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
                    
    if(password=== "" || !regPass.test(password)){
      errorDateStore.password = "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
      check= true
    }
    if(confirmPassWord === "" ){
      errorDateStore.confirmPassWord = "*Required";
      check= true
    }else if(confirmPassWord !== password){
      errorDateStore.confirmPassWord = " The Password does not Match"
      check= true;
    }
    const regxUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
    if(url === "" || !regxUrl.test(url) ){
      errorDateStore.url = "Use a Valid *URL";
      check= true
    }
    if(slug === ""){
      errorDateStore.slug = "slug Field in required";
      check= true
      
    }
    seterrorStore(errorDateStore)
    if(check)return
    setuseSubmit(true)
    console.log(dateStore);
  }

  return (
    <Container className="app">  
      {useSubmit ? <h4>✅ Yeah! Submitted Your Form <h1 className="likeEle"> 👍 </h1> </h4> : <h2>Form Handling</h2>}
        <Row>
          <Col>
          {!useSubmit && 
          <Form onSubmit={handleSubmit} noValidate>
            <Row>
              <Col>
                  <Form.Label>Full name</Form.Label>
                  <Form.Control type="text" name="fullName" value={fullName} onChange={inputHandling}/>
                  <div className="alertEle">{errorStore && errorStore.fullName}</div>
                  <br />
              </Col>
              <Col>
                  <Form.Label>User Name</Form.Label>
                  <Form.Control type="text" name="UserName" value={UserName} onChange={inputHandling}/>
                  <div className="alertEle">{errorStore && errorStore.UserName}</div>
                  <br />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={email} onChange={inputHandling}/>
                <div className="alertEle">  {errorStore && errorStore.email}</div>
                  <br />
              </Col>
              <Col>
                <Form.Label>Bithday Of Date</Form.Label>
                <Form.Control type="date" name="date" value={date} onChange={inputHandling}/>
               <div className="alertEle"> {errorStore && errorStore.date}</div>
                  <br />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={password} onChange={inputHandling}/>
                <div className="alertEle">{errorStore && errorStore.password}</div>
                  <br />
              </Col>
              <Col>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" name="confirmPassWord" value={confirmPassWord} onChange={inputHandling}/>
             <div className="alertEle"> {errorStore && errorStore.confirmPassWord}</div>
                <br />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>URL</Form.Label>
                <Form.Control type="text" name="url" value={url} onChange={inputHandling}/>
                <div className="alertEle"> {errorStore && errorStore.url}</div>
                  <br />
              </Col>
              <Col>
                <Form.Label>slug</Form.Label>
                <Form.Control type="text" name="slug" value={slug} onChange={inputHandling}/>
                <div className="alertEle">{errorStore && errorStore.slug}</div>
                  <br />
              </Col>
            </Row>
            <input className="btn btn-primary mt-3 btnEle" type="submit" value="Submit" />
          </Form>
          }  
          </Col>
          <Col>
          <div className="contentShow">
          <pre>{JSON.stringify(templist, undefined, 10)}</pre>
          </div>
          </Col>
        </Row> 
    </Container>
  );
}

export default App;
