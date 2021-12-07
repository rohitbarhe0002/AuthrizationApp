import React from 'react'
import { requestProduct } from '../thunk/request'
import { useDispatch,useSelector } from 'react-redux'
import { setpagination } from '../actions';
import { useEffect } from 'react';
import {Table} from 'react-bootstrap'
import {Button} from 'react-bootstrap';
export default function Product() {
   
    
    const selector  = useSelector((state) => state.Product.product.records) 
    const filters  = useSelector(state => state.Product.product.filters) 

    const dispatch = useDispatch();
     console.log("product",selector)

   
    useEffect(() => {
      const getRecords = () => {
        dispatch(requestProduct(filters));
      };

      getRecords();
    }, [filters.limit, filters.page]);

    const handleChangeFilter = (event) => {
      const { value, name } = event.target;
      dispatch(setpagination({ [name]: value }));
    };
  
    const handlePageChange = (acc) => {
      dispatch(setpagination({ page: acc +filters.page }));
    };

  return (
   <>

    <select name="limit" value={filters.limit} onChange={handleChangeFilter}>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={5}>5</option>
     
      </select>
        <div>
            <h1>Product List</h1>
            <Table striped bordered hover>
  <thead>
    <tr>
      
      <th>Id</th>
      <th> product name</th>
   
    </tr>
  </thead>
            {selector.map((Item)=>(
    
              <tbody>
              <tr>
                
                <td>{Item.id}</td>
                <td>{Item.name}</td>
              </tr>
              </tbody>
            ))}
     </Table>
     <Button  varient="warning"disabled={filters.page === 1} onClick={() => handlePageChange(-1)}>Prev</Button>   
     <Button varient="warning"disabled={filters.page === filters.pages} onClick={() => handlePageChange(1)}>Next</Button>
        </div>
        </>
    )
}
