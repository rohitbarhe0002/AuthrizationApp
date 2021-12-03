import { TOKEN } from "../actions";

const initialState = {
    token:"",
   }
   const getLocalStorage =(token=" ")=>{
     const data = JSON.stringify(token);
   
     console.log(data)
   }
   
   export default function Token (state = initialState, action) {
    
     switch (action.type) {
       case TOKEN:
      const token =[...state.token,action.payload]
          getLocalStorage(token);
          return{
            ...token,
          }
         default:
       return state;
   }
 }

