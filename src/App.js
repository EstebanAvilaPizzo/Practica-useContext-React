import './App.css';
import Profile from './components/Profile';
import UserList from './components/UserList';
import UserState from './context/User/UserState';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return ( //dentro del componente UserState deben ir los demas componentes para que puedan usar el estado 
    <>  
      <UserState> 
      <header className='text-center bg-dark text-light p-5'> <h3>React useContext - Ejemplo Practico</h3></header>
        <main>
        <div className='container p-4'>
           <div className='row'>
              <div className='col-md-7'>
               <UserList/>
              </div>
              <div className='col-md-5'>
               <Profile/>
              </div>
           </div>
        </div>
        </main>
        <footer className='text-center bg-dark text-light p-5'>&copy; consumiendo api reqres.in mediante useContext</footer>
    </UserState>
    </>
  );
}

export default App;
