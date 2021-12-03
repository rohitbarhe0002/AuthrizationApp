import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react';
import { requestLocation } from '../thunk/request'
import {Table} from 'react-bootstrap'
import { Link } from 'react-router-dom';
export default function Location() {
  
    const Locations = useSelector(state => state.locations.location) 
    const dispatch = useDispatch();
    console.log(Locations)

    useEffect(() => {
      
    dispatch(requestLocation());
          
      
    }, [])

  return (
        <div>
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
                <td>{Item.locationId}</td>
                <td>{Item.name}</td>
              </tr>
              </tbody>
            ))}
            </Table>
        </div>
  )
}
