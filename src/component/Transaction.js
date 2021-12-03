import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {Table} from 'react-bootstrap'
import { requestTransaction } from '../thunk/request';

export default function Transaction() {
   
        const Transactions = useSelector(state => state.transactions.transaction) 
        const dispatch = useDispatch();
        console.log(Transactions)
    
        useEffect(() => {
          
        dispatch(requestTransaction());
              
          
        }, [])
    
      return (
            <div>
                <h1>Transactions List</h1>
                <Table striped bordered hover>
  <thead>
    <tr>
      
      <th>Id</th>
      <th> quantity</th>
   
    </tr>
  </thead>
            {Transactions.map((Item)=>(
               <tbody>
               <tr>
                 <td>{Item.id}</td>
                 <td>{Item.quantity}</td>
               </tr>
               </tbody>
                ))}
                </Table>
            </div>
        )
    
}
