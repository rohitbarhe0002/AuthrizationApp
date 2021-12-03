import { GET_FAMILIS} from "../actions";

const initialState = {
   family:[],
   }
 
   
   
export default function familis (state = initialState, action) {
    
     switch (action.type) {
       case GET_FAMILIS:
              return {
                ...state,
                family: action.payload,
              };
              default:
            return state;
        }
 }


