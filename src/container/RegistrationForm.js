import React from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { getdata } from '../actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {  requestPost } from '../thunk/request';
import { useHistory } from 'react-router';
import Alert from 'react-bootstrap/Alert'

export default function RegistrationForm() {
    let history= useHistory();
    const dispatch = useDispatch();

    const userData = useSelector((state)=>state.Registration.info)
    const {email,password} = userData;
 
    const InputChange = (event) =>{
        dispatch(getdata({...userData,[event.target.name]:event.target.value}));   
    };
 
    const onSubmit = (event)=>{
        history.push('/LoginUser');
        console.log("submit regi",userData)
        event.preventDefault();
        dispatch(requestPost(userData));
       
    };
 
 return (
     <div >
      <div>
        <h3 className="heading"></h3>

           <Form onSubmit={onSubmit}>
         <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Email
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text"  name ="email" placeholder="Email" value={email} onChange={InputChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword" >
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="password" name="password"  placeholder="Password"  value={password} onChange={InputChange} />
                        </Col>
                    </Form.Group>
                    {/* <input type="text" name="Email" value={Email} onChange={InputChange}/>
                    <input type="text" name="password" value={password} onChange={InputChange}/> */}

                    <Button variant="success" type="submit"> signUp </Button>       <Button variant="primary" type="submit"> Login </Button>
                </Form>
            </div>
        </div>
    )
}
