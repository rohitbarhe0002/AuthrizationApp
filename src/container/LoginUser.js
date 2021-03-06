import React from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { setdata } from '../actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { requestPost } from '../thunk/request';
import { useHistory} from 'react-router';
import { requestGet } from '../thunk/request';


export default function LoginUser() {
    const dispatch = useDispatch();
    let history = useHistory();
   

const userinfo = useSelector((state)=>state.Login.user)
 const {email,password} = userinfo;

const InputChange = (event) =>{
  dispatch(setdata({...userinfo,[event.target.name]:event.target.value}));
  
};
const onSubmit = (event)=>{
  console.log("login",userinfo)
      history.push('/Dashboard');
      event.preventDefault();
     dispatch(requestGet(userinfo));
       
    };
 
    return (
        <div >
            <div>

                <h3 className="heading">
                  
                </h3>

                <Form onSubmit={onSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Email
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="email"  name ="email" placeholder="Email" value={email} onChange={InputChange} />
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

                    <Button variant="warning" type="submit">  Login </Button>
                </Form>
            </div>
        </div>
    )
}
