import { GET_USERS, GET_PROFILE } from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    const {payload, type} = action;
     switch(type) {
        case GET_USERS:
            return{
                ...state, 
                users: payload
            }
        case GET_PROFILE:
            return{
                ...state,
                selectedUser: payload
            }
        default:
           return state;
    }
}

//crear una funcion anonima, con dos parametro, 1ro el estado actual y 2do action que es lo que quiero que haga, como actualizar ese estado
//desetruturamos action que es un objeto que tiene: un type, esto elige entre GET_USERS o GET_PROFILE y un
                                    //payload son los datos que me pasan de esa funcion
                                    //actualizo el state con los datos del payload