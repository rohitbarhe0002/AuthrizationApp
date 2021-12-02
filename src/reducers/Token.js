import { TOKEN } from "../actions";

const initialState = {
    token:[],
   }
   
   export default function Token (state = initialState, action) {
    console.log("type is ",typeof action);
     switch (action.type) {
       case TOKEN:
           const data = state.token.push(action.payload)
           console.log("3333333333333333333",data);
        //    localStorage.setItem("token",)
           
         default:
       return state;
   }
 }