import {React} from 'react';
import Signup from './Signup'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import ForgotPassword from './ForgotPassword'
import Admin from './Admin'
import UserDataForm from './UserDataForm'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cakedetails from './Cakedetails'
import Search from './Search'
import Checkout from './Checkout'
import Cart from './Cart'
import Address from './Address'
export function App() {

     return (
    <div >
    
      
     <BrowserRouter>
     <Navbar />
    <Routes>
      <Route path ='/' element = {<Home></Home>}> </Route>
      <Route path ='/Signup' element = {<Signup></Signup>}>  </Route>  
      <Route path ='/Login' element = {<Login></Login>}>  </Route> 
      <Route path ='/ForgotPassword' element = {<ForgotPassword></ForgotPassword>}>  </Route> 
      <Route path ='/Admin' element = {<Admin></Admin>}>  </Route>
      <Route path ='/Search' element = {<Search></Search>}> </Route>
      <Route path ='/Checkout' element = {<Checkout></Checkout>}> 
      
      <Route path ='Address' element = {<Address />} /> 
      
      
      </Route>
      <Route path ='/Cart' element = {<Cart></Cart>}> </Route>
      <Route path ='/UserDataForm/:userid' element = {<UserDataForm></UserDataForm>}>  </Route>
      <Route path ='/Cakedetails/:cakeid' element = {<Cakedetails></Cakedetails>}>  </Route>
      <Route path ='*' element = { <h1 style={{marginTop: 100}}>404 No Page</h1> }>  </Route>
    </Routes>
     </BrowserRouter>
     
    
    </div>
  );
}

export default App

