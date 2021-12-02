import Button from '@restart/ui/esm/Button'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useDispatch } from 'react-redux'
import { requestGet } from '../thunk/request'
const RegistrationForm = () => {
    const dispatch = useDispatch()
    const [signupform, setsignupform] = useState({ email: "", password: "" })
    const handleChange=(e)=>{
const {name,value}=e.target
setsignupform({...signupform,[name]:value})
    }
   const handleSubmit=(e)=>{
e.preventDefault();
dispatch(requestGet(signupform))
console.log(signupform);
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Control name="email" value={signupform.email} onChange={handleChange} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Control name="password" value={signupform.password} onChange={handleChange} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default RegistrationForm
