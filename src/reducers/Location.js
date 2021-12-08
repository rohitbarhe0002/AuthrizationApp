import { GET_LOCATION, LOCATION_PAGINATION} from "../actions";

const initialState = {
  location: {
    recordsLocation: [],
    filters: { page: 1, limit: 10},
  },
   }
export default function locations (state = initialState, action) {
    console.log(action.payload);
     switch (action.type) {
       case GET_LOCATION:
              return {
              
                ...state,
                location: {
                  ...state.location,
                  ...action.payload,
                }
              };
              case LOCATION_PAGINATION:
                return {
                        ...state,
                        location:{
                          ...state.location,
                          filters: {
                                ...state.location.filters,
                                ...action.payload,
                  }
                }
              }
              default:
            return state;
        }
 }


