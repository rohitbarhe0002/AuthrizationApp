import axios from "axios";
import { getdata, getproduct ,getfamilis, getlocation, gettransaction, setdata } from "../actions";
import { setToken } from "../actions";



const client = axios.create({
    baseURL: 'http://localhost:8000',

  });
  const x =JSON.parse(localStorage.getItem("token"))
  client.defaults.headers.common['Authorization'] = `Bearer ${x}`;

 console.log("hjjfj",x);



  export const requestPost = (userData) => async (dispatch) => {
    
    try {
      const response = await client.post('/auth/register',userData);
      dispatch(getdata(response.data));
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }



  export const requestGet = (userinfo) => async (dispatch) => {
    
    try {
      const response = await client.post('/auth/login',userinfo)
     
     dispatch(setdata(response.data));
     // dispatch(setToken(response.data.access_token))
  
      const  data=JSON.stringify(response.data.access_token)
      localStorage.setItem('token',data);
     console.log(data)
          
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }



  export const requestProduct = () => async (dispatch) => {
    
    try {
      const response = await client.get('/products');
      dispatch(getproduct(response.data));
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }


  export const requestLocation = () => async (dispatch) => {
    
    try {
      const response = await client.get('/locations');
      dispatch(getlocation(response.data));
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }

   
  export const requestTransaction = () => async (dispatch) => {
    
    try {
      const response = await client.get('/transactions');
      dispatch(gettransaction(response.data));
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }

  export const requestFamilis = () => async (dispatch) => {
    
    try {
      const response = await client.get('/families');
      dispatch(getfamilis(response.data));
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }