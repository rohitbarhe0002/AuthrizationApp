import React from 'react'
import { requestFamilis } from '../thunk/request';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {Table} from 'react-bootstrap'

export default function Familis() {
    const Familis = useSelector(state => state.familis.family) 
    const dispatch = useDispatch();
    console.log(Familis)
    useEffect(() => {
    dispatch(requestFamilis());
 }, [])

  return (
        <div>
    
            <h1>Familis List</h1>
          
            <Table striped bordered hover>
  <thead>
    <tr>
      
      <th>Id</th>
      <th> Name</th>
   
    </tr>
  </thead>

            {Familis.map((Item)=>(
            <tbody>
            <tr>
              <td>{Item.id}</td>
              <td>{Item.name}</td>
            </tr>
            </tbody>
            
            ))}
            </Table>
        </div>
    )
}
