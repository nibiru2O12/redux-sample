import * as types from './type';

// generate an action creator
const makeActionCreator = (type,...argsName) => {
    return (...payloads) => {
        const action = { type };
        argsName.forEach((arg,i)=>{
            action[arg] = payloads[i];
        })
        return action;
    } 
}

const loginStart = makeActionCreator(types.LOGIN_START);
const loginFailed = makeActionCreator(types.LOGIN_START);
const loginSuccess = makeActionCreator(types.LOGIN_START,'user');

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
            resolve("Something went wrong")
        },5000)
    })
}

const logout = () => {
     return {
               type: types.LOGIN_OUT,
         }
}