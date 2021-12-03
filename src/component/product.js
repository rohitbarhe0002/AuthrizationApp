import React from 'react'
import { requestProduct } from '../thunk/request'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react';
import {Table} from 'react-bootstrap'
export default function Product() {
   
    
    const products = useSelector(state => state.Product.Product) 
    const dispatch = useDispatch();
    console.log(products)

    useEffect(() => {
      
    dispatch(requestProduct());
          
      
    }, [])

  return (
        <div>
            <h1>Product List</h1>
            <Table striped bordered hover>
  <thead>
    <tr>
      
      <th>Id</th>
      <th> product name</th>
   
    </tr>
  </thead>
            {products.map((Item)=>(
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
