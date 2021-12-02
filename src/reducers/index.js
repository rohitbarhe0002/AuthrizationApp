import { combineReducers } from 'redux';
import  Registration  from './UserInfo';
import Login from './LoginUser';
import Token from './Token';
const reducer= combineReducers({

    Registration,
    Login,
    Token,

});
export default reducer;