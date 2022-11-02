/* eslint-disable no-sequences */
import './App.css';
import Form from './Form';
import {ProfilePage} from './ProfilePage'
import {BlogPage} from './BlogPage';
import {Home} from './Home';
import {Menu} from './Menu'
import {BlogPost} from './BlogPost';
import { Routes, Route} from 'react-router-dom'
import {LogoutPage} from './LogoutPage';
import {LoginPage} from './LoginPage';
import {AuthProvider, AuthRoute} from './Auth'

function App() {
  
  return (
    <>
    
   <AuthProvider>
   <Menu />
    <Routes>
            <Route path = '/' element = {<Home />}></Route>
            <Route path = '/blog' element = {<BlogPage />}></Route>
            <Route path = 'blog/:slug' element = {<BlogPost />}></Route>
            <Route path = '/form' element = {<Form />}></Route>
            
            <Route path = '/login' element = {
              <LoginPage />
              }> 
            </Route>
            <Route path = '/logout' element = {
              <AuthRoute>
                <LogoutPage />
              </AuthRoute>
              }> 
            </Route>
            <Route path = '/profile' element = {
              <AuthRoute>
                <ProfilePage />
              </AuthRoute>
              }> 
              </Route>

            <Route path = '*' element = {<p> Not found</p>}></Route>
                
            
     </Routes>
   </AuthProvider>
   
    </>
  );
}

export default App;
