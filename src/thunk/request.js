import axios from "axios";
import { getdata, setdata } from "../actions";
import { setToken } from "../actions";

const client = axios.create({
    baseURL: 'http://localhost:8000',
  });
  

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
      const response = await client.post('/auth/register',userinfo);
      const a=[];
      a.push(response.data.access_token)
      dispatch(setdata(response.data));
      dispatch(setToken(response.data.access_token))
      console.log(response.data.access_token);
     
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }