import {combineReducers} from 'redux';
import * as types from './type';

const auth_initial = {
    isAuthenticating: false,
    isAuth: true,
    success: false,
    error: null,
} ;
const auth = (state=auth_initial,action) => {
     switch(action.type) {
            case types.LOGIN_START:
                return {...auth_initial,isAuthenticating:true};
            case types.LOGIN_ERROR:
                return {...auth_initial,error:action.error};
            case types.LOGIN_SUCCESS:
                return {...auth_initial,success:true, isAuth:true};
            default:
                return state;
        }
}

const rootReducer = combineReducers({
    auth
});

export default rootReducer;

