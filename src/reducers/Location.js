import { GET_LOCATION} from "../actions";

const initialState = {
   location:[],
   }
 
   
   
export default function locations (state = initialState, action) {
    
     switch (action.type) {
       case GET_LOCATION:
              return {
                ...state,
                location: action.payload,
              };
              default:
            return state;
        }
 }


