import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react';
import { requestLocation } from '../thunk/request'
import {Table} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import { paginationOnLocation } from '../actions';
export default function Location() {
  
    const {Locations,filters} = useSelector(state => state.locations.location) 
    const dispatch = useDispatch();
    console.log("hii",Locations)

 

    useEffect(() => {
      const getRecords = () => {
        dispatch(requestLocation(filters));
      };

      getRecords();
    }, [filters.limit, filters.page]);

    const handleChangeFilter = (event) => {
      const { value, name } = event.target;
      dispatch(paginationOnLocation({ [name]: value }));
    };
  
    const handlePageChange = (acc) => {
      dispatch(paginationOnLocation({ page: acc +filters.page }));
    };


  return (
        <div>

<select name="limit" value={filters.limit} onChange={handleChangeFilter}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={1}>1</option>
     
      </select>


            <h1>Location List</h1>
            <Table striped bordered hover>
                
  <thead>
    <tr>
      
      <th>Id</th>
      <th> Location</th>
   
    </tr>
  </thead>

            {Locations.map((Item)=>(
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
  )
}
