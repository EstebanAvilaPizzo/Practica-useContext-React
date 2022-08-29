import React, { useContext, useEffect } from 'react'
import UserContext from '../context/User/UserContext'

const UserList = () => {
                                                                //en el desestructuring le pasamos la funcion que queremos 
    const {users, getUsers, getProfile} = useContext(UserContext); //useContext Acepta un objeto de contexto (el valor devuelto por React.createContext) y devuelve el valor de contexto actual
                                                  //dentro del useEffect llamamos a que se ejecute dicha funcion
 
    useEffect(() => { 
       getUsers();
       console.log(users);
    },[getUsers, users])

  return (
   <>
    <div className='list-group h-100'>
      {
        users.map(user => (
            <a className='list-group-item list-group-item-action d-flex ' href='#!' key={user.id} onClick={() => getProfile(user.id) }> 
                 <img src= {user.avatar} alt="imagen avatar" className="img-fluid mr-4 rounded-circle" width="80" />
                <p> 
                  {`${user.first_name} ${user.last_name}`}
                </p> 
             </a>
        ))
      }
    </div>
      
   </>
  )
}

export default UserList;
