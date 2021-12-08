import { TOKEN } from "../actions";

const getLocalStorage =( )=>{
  let getToken = localStorage.getItem("token") || "";
  return getToken;

 }

const initialState = {
    token: getLocalStorage(),
   }
 
   
   export default function Token (state = initialState, action) {
    
     switch (action.type) {
       case TOKEN:
         return{
        ...state,
        token: action.payload,
          }
         default:
       return state;
   }
 }

