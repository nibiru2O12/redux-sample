import * as types from './type';


const loginStart = () => {
     return {
               type: types.LOGIN_START,
         }
}

const loginFailed = (error) => {
     return {
            type: types.LOGIN_ERROR,
            error
         }
}

const loginSuccess = (user) => {
    return {
        type : types.LOGIN_SUCCESS,
        user
    }
}

export const login = ({user,password}) => {
    return dispatch => {
        dispatch(loginStart());
        fakeFetch()
            .then(()=>dispatch(loginSuccess()))
            .catch((error)=>dispatch(loginFailed(error)))
    }
}

function fakeFetch(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Something went wrong")
        },5000)
    })
}

const logout = () => {
     return {
               type: types.LOGIN_OUT,
         }
}