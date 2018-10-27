import * as types from './type';


const loginStart = () => {
     return {
               type: types.LOGIN_START,
         }
}

const loginFailed = (error) => {
     return {
               type: types.LOGIN_ERROR,
         }
}

export const login = ({user,password}) => {
    return {
        type: types.LOGIN_SUCCESS,
        user
    }
}