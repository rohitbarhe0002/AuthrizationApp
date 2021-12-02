import { GET_DATA } from "../actions";

const initialState = {
    info:{
        email:"",
        password:"",
    },
   }
   
   export default function Registration (state = initialState, action) {
    
     switch (action.type) {
       case GET_DATA:
         return {
           ...state,
           info: action.payload,
         };
         default:
       return state;
   }
 }