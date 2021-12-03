import { SET_NAV } from "../actions";

const initialState = {
   show:true,
   }
 
   
   
export default function nav (state = initialState, action) {
    
     switch (action.type) {
       case SET_NAV:
              return {
                ...state,
            show: action.payload,
              };
              default:
            return state;
        }
 }


