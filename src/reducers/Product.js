import { GET_PRODUCT} from "../actions";

const initialState = {
   Product:[],
   }
 
   
   
export default function Product (state = initialState, action) {
    
     switch (action.type) {
       case GET_PRODUCT:
              return {
                ...state,
                Product: action.payload,
              };
              default:
            return state;
        }
 }


