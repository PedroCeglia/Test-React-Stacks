import { createStore } from "redux";

const INICIAL_STATE = {
    user:{
        nome: "Pedro",
        email: "pedro@gmail.com",
        senha: "123456"            
    },
    admim:{
        nome: "Adm",
        email: "adm@gmail.com",
        senha: "ADM123456"            
    }
}

function reducer(state = INICIAL_STATE, action){
    if(action.type === 'SET_USER_NAME'){
        return {...state, user:action.user}
    }

    return state;
}

const store = createStore(reducer)

export default store