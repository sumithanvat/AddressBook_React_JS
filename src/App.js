import React from 'react'
import {Route,Routes,Link} from "react-router-dom";
import AddressForm from './Component/PersonAddressForm.jsx'
import '../src/Component/PersonAddressForm.css'
import PersonTable from './Component/PersonTable.jsx'
import '../src/Component/PersonDetails.css';

function App() {
return(
  <div>
     <nav>
      <Link to="/add">AddressForm</Link><br></br>
      <Link to="/">Person Table</Link>
            
     </nav>
      
      <Routes>  
        <Route path='/add'element={<AddressForm/>}/>
        <Route path='/'element={<PersonTable/>}/>
        <Route path="/editform/:id" element={<AddressForm />} />
           
        

             </Routes>
    </div>
)
}
export default App;
