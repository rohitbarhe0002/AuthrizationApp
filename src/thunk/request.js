import axios from "axios";
import { getdata ,getfamilis, getlocation, getproduct, gettransaction, setdata, setToken } from "../actions";


const client = axios.create({
    baseURL: 'http://localhost:8000',

  });
  
  client.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;

  // console.log("hjjfj",x);

  export const requestPost = (userData) => async (dispatch) => {
    
    try {
      const response = await client.post('/auth/register',userData);
      dispatch(getdata(response.data));
    } catch (err) {

      console.log(err);
    }
  }

  export const requestGet = (userinfo) => async (dispatch) => {
    try {
      const response = await client.post('/auth/login',userinfo)
     
     dispatch(setdata(response.data));
   
     localStorage.setItem('token', response.data.access_token);
     dispatch(setToken(response.data.access_token));
    //   const  data=JSON.stringify(response.data.access_token)
    //   localStorage.setItem('token',data);
    //  console.log(data)
          
    } catch (err) {
     
      console.log(err);
    }
  }

  export const requestProduct = (prevFilters) => async (dispatch) => {
    const params = {
      _limit: prevFilters.limit,
      _page: prevFilters.page,
    }
    
    try {
      const response = await client.get('/products',{params});
      dispatch(getproduct({records:response.data}));
      console.log("hello",response)
      // dispatch(setpagination(filters));
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }


  export const requestLocation = (prevFilters) => async (dispatch) => {
    const params = ({
      _limit: prevFilters.limit,
      _page: prevFilters.page,
    })
    
    
    try {
      const response = await client.get('/locations', {params});
      dispatch(getlocation({requestLocation:response.data}));
      console.log("Location",response);
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
      const response = await client.get('/familis');
      dispatch(getfamilis(response.data));
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }


  // // export const requestFamilis = () => async (dispatch) => {
    
  // //   try {
  // //     const response = await client.get('/families');
  // //     dispatch(getfamilis(response.data));
  // //   } catch (err) {
  // //     // logs the error whatever error occured in try block
  // //     console.log(err);
  // //   }
  // }