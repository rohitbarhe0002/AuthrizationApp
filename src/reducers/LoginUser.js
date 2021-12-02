import { SET_DATA } from "../actions";

const initialState = {
    user:{
        email:"",
        password:"",
    },
   }
   
   export default function Login (state = initialState, action) {
    
     switch (action.type) {
       case SET_DATA:
         return {
           ...state,
           user: action.payload,
         };
         default:
       return state;
   }
 }