import { combineReducers } from 'redux';
import  Registration  from './UserInfo';
import Login from './LoginUser';
import Token from './Token';
import nav from './Setnav';
import Product from '../reducers/Product';
import familis from './Familis';
import transactions from './Transaction';
import locations from './Location';
const reducer= combineReducers({
    Registration,
    Login,
    Token,  
    Product,
    familis,
    transactions,
    locations,
    nav,
});
export default reducer;