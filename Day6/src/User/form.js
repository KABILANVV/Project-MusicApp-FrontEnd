import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './login';

import '../styles/form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row,InputGroup } from 'react-bootstrap';

function Forms() {
    const[Username,setUsername]=useState('')
    const[Email,setEmail]=useState('')
    const[Mobile,setMobile]=useState('')
    const[Password,setPassword]=useState('')
    const[ConfirmPassword,setConfirmPassword]=useState('')
    const[Error,setError]=useState(false)


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(Username.length===0||Email.length===0){
            setError(true);
        }
        if(Mobile.length!==10){
            setError(true);
        }
        if(Password!==ConfirmPassword){
            setError(true);
        }
        if(Username&&Email){
          console.log(Username,Email,Mobile,Password,Error);
        }
    }
  return (
    <div class="Registration">
    <Form className="form" onSubmit={handleSubmit} >
        <div>
        <Form.Group controlId="formGridlabel" id="reg-head" className="col col-sm-20"><h1>Register Here</h1></Form.Group>
        <br/>
        <Row className="mb-3">
        <Form.Group controlId="formBasicEmail" className="col col-sm-10">
            <Form.Label className='input'>Username</Form.Label>
            <Form.Control placeholder='UserName' onChange={e=>setUsername(e.target.value)}/>
        {Error && Username.length<=0?
        <Form.Label className='error'>UserName can't be Empty </Form.Label>:""}
            </Form.Group>   
    </Row>
        <Row className="mb-3">
        <Form.Group controlId="formBasicEmail" className="col col-sm-10">
            <Form.Label className='input'>Email</Form.Label>
            <InputGroup>
        <Form.Control placeholder='Email' onChange={e=>setEmail(e.target.value)} /><InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
            </InputGroup>
        {Error && Email.length<=0?
        <label className='error'>Email can't be Empty </label>:""}
            </Form.Group>
        </Row>
        
        <Row className="mb-3">
        <Form.Group controlId="formBasicMobile" className="col col-sm-10">
            <Form.Label className='input'>Mobile Number</Form.Label>
            <InputGroup>
                <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
            <Form.Control placeholder='Mobile Number' onChange={e=>setMobile(e.target.value)}/>
            </InputGroup>
        {Error && Mobile.length<=4?
        <Form.Label className='error'>Mobile Number is Invalid </Form.Label>:""}
        </Form.Group>
        </Row>
        <Form.Label className='input'>Password</Form.Label>
        <Row className="mb-3">
        <Form.Group controlId="formBasicEmail" className="col col-sm-10">
            <Form.Control placeholder='Password' onChange={e=>setPassword(e.target.value)}/>
        {Error && Password.length<=3?
        <Form.Label className='error'>Password is short </Form.Label>:""}
        </Form.Group>
        </Row>
        
        <Row className="mb-3">
        <Form.Group controlId="formBasicEmail" className="col col-sm-10">
            <Form.Label className='input'>Confirm Password</Form.Label>
            <Form.Control placeholder='Re-Enter Password' onChange={e=>setConfirmPassword(e.target.value)}/>
        {Error && ConfirmPassword!==Password?
        <Form.Label className='error'>Password Doesn't Match</Form.Label>:""}
        </Form.Group>
        </Row>
           <button id="button" className="me-1 btn btn btn-lg" onSubmit={<Login/>}>Submit</button>
        </div>

     <h3><Link to='/login'>Login</Link></h3>
     </Form>
     
      <br/>
      <br/>
      <br/>
     </div>
  )
}

export default Forms