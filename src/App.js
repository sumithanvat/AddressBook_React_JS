import React from 'react'
import {Route,Routes,Link} from "react-router-dom";
import AddressForm from './Component/PersonAddressForm.jsx'
import '../src/Component/PersonAddressForm.css'
import PersonDetails from './Component/PersonDetails.jsx'
import '../src/Component/PersonDetails.css';

function App() {
return(
  <div>
     <nav>
      <Link to="/add">AddressForm</Link><br></br>
      <Link to="/Details">Person Details</Link>
            
     </nav>
      
      <Routes>  
        <Route path='/add'element={<AddressForm/>}/>
        <Route path='/Details'element={<PersonDetails/>}/>
           
        

             </Routes>
    </div>
)
}
export default App;
