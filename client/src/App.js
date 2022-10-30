/* eslint-disable no-sequences */
import './App.css';
import Form from './Form';
import {Blog} from './Blog';
import Home from './Home';
import {Menu} from './Menu'
import {BlogPost} from './BlogPost';
import { Routes, Route} from 'react-router-dom'
import {LogoutPage} from './LogoutPage';
import {LoginPage} from './LoginPage';


function App() {
  
  return (
    <>
    
    <Menu />
     <Routes>
            <Route path = '/' element = {<Home />}></Route>
            <Route path = '/blog' element = {<Blog />}></Route>
            <Route path = 'blog/:slug' element = {<BlogPost />}></Route>
            <Route path = '/form' element = {<Form />}></Route>
            
            <Route path = '/login' element = {<LoginPage />}> </Route>
            <Route path = '/logout' element = {<LogoutPage />}> </Route>

            <Route path = '*' element = {<p> Not found</p>}></Route>

            
     </Routes>
     
    </>
  );
}

export default App;
