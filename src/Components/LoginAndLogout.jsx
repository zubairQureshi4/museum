import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import myImage from '../../public/logo.png';

const LoginAndLogout = ({setIsUser}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)
    setIsUser(true)
  };

  

  return (
    <div   className='bg-colr row'>
      <div className='col-6 mx-auto'>
        <div className='form_class'> 

      <Form onSubmit={handleSubmit} className="align-items-center" >
        <Form.Group  controlId="formGroupEmail"  hasValidation>   
        <marquee><h3 className='txt'>Welcome to Our Museum</h3></marquee>
          <Form.Label className='txt'>Email</Form.Label>
          <Form.Control
            
            required
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword" hasValidation>
          <Form.Label className='txt'>Password</Form.Label>
          <Form.Control
            required  
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          
        </Form.Group>

        <Button  variant="outline-warning"  type='submit'>Login</Button>{' '}
        
      </Form>
            </div>
            </div>
            <div className='col-6'>

        <img src={myImage}></img>
        </div>
     
    </div>
  );
};


export default LoginAndLogout