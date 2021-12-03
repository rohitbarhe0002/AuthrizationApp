import { GET_TRANSACTION} from "../actions";

const initialState = {
   transaction:[],
   }
 
   
   
export default function transactions (state = initialState, action) {
    
     switch (action.type) {
       case GET_TRANSACTION:
              return {
                ...state,
                transaction: action.payload,
              };
              default:
            return state;
        }
 }


