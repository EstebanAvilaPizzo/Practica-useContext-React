// Aqui definimos el estado (state) y sus funciones para que puedan ser consumidas desde cualquier componente

import React, {useReducer} from 'react';         //useReducer es un hook
import UserReducer from "./UserReducer";         //UserReducer es un componente 
import UserContext from './UserContext';
import axios from 'axios';

const UserState = (props) => {

    const initialState = {
        users: [],  //se completa mediante la funcion getUsers
        selectedUser: null //se completa mediante la funcion getProfile
    }
    
    const [state, dispatch] = useReducer(UserReducer, initialState) //el state es el estado de inicializacion
                                                                 //dispatch puede elegir que funcion del UserReducer ejecutar


    const getUsers = async() => { //para traer una lista de usuarios
      const res =  await  axios.get('https://reqres.in/api/users/');
      dispatch({
        type: 'GET_USERS',
        payload:res.data.data
      })
    //   console.log(res.data.data);
    }
    
    const getProfile = async(id) => { //para traer un unico usuario
        const res =  await  axios.get('https://reqres.in/api/users/' + id);
        dispatch({
            type: 'GET_PROFILE',
            payload: res.data.data
        })
        console.log(res.data.data);
    }

  return (
    <div>                    
      <UserContext.Provider value={{          //todos los componentes que esten dentro de este UserContext.Provider van a poder acceder al estado que definimos aqui
          users: state.users,                     //el value determina que van a poder hacer los componentes hijos, dentro del value le pasamos un objeto con los estados actualizados y tambien las funciones que alteran esos estados
          selectedUser: state.selectedUser,
          getUsers,
          getProfile
      }}>   
         {props.children}                     
     </UserContext.Provider>                  
    </div>
  )                       //Prop.children son los componentes que estaran dentro de este componente
}

export default UserState;





