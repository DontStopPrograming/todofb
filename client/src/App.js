/* eslint-disable no-sequences */
import './App.css';
import Form from './Form';
import Mensaje from './Mensaje';
import Home from './Home';
import { Link, Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <>
      <div className = 'App'>
        <header>
          <h1> TITULO</h1>
          <nav>
            <ul>
              <li> <Link to = '/'> Home</Link></li>
              <li> <Link to = '/mensaje'> Message</Link></li>
              <li> <Link to = '/form'> Form</Link> </li>
            </ul>
          </nav>
        </header>
      </div>

     <Routes>
            <Route path = '/' element = {<Home />}></Route>
            <Route path = '/mensaje' element = {<Mensaje />}></Route>
            <Route path = '/form' element = {<Form />}></Route>
     </Routes>
    </>
  );
}

export default App;
