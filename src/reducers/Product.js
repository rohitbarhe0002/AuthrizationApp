import { GET_PRODUCT, SET_PAGINATION} from "../actions";

const initialState = {
  
   product: {
    records: [],
    filters: { page: 1, limit: 10}
  }
}
   
   
export default function Product (state = initialState, action) {
    
     switch (action.type) {
       case GET_PRODUCT:
         //console.log("devendra",action.payload);
              return {
                ...state,
                product: {
                  ...state.product,
                  ...action.payload,
                }
              };
              case SET_PAGINATION:
              return {
           
                  ...state,
                  product:{
                    ...state.product,
                    filters: {
                          ...state.product.filters,
                          ...action.payload,
                  
                }
              }
            }
              
              default:
            return state;
        }
 }


