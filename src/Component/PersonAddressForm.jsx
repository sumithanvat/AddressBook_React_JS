import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AddressService from '../Service/AddressService';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


function AddressForm() {
  let initialValue={
    name:"",
    phoneNumber:"",
    email:"",
    address:[],
    city:"Jabalpur",
    state:"Madhya Pradesh",
    pinCode:"",
    isUpdate:false,
    

  }
  const[formData,setFormData]=useState(initialValue);
  const params = useParams();

  useEffect(() => {
    console.log("UseEffect");
      if (params.id) {
        console.log("Inside if ");
          getDataById(params.id);
      }
  }, [params.id]);

  const getDataById =(id) =>{
    AddressService.getContactById(id)
    .then((response)=>{
      let object = response.data.data;
      setData(object);
    })
    .catch((err)=>{
      alert("err is ",err)
    })
  }
  

  const setData = (obj) =>{
    let array =obj.name;
    console.log(array);
    console.log(obj);

  setFormData({
    ...formData,
    ...obj,
    id: obj.id,
    email:obj.email,
    phoneNumber:obj.phoneNumber,
    name:obj.name,
    address:obj.address,
    isUpdate:true,
    city:obj.city,
    state:obj.state,
    pinCode:obj.pinCode,
  })
  }

  const handleInputChange =(event) => {
    console.log(event.target.name);
    setFormData({...formData,[event.target.name]:event.target.value});

  };


  
  // const handleAdd =() =>{
  //   console.log(formData)
  // }

  const save = async(event) => {
    event.preventDefault();
    console.log(formData)

    let object ={
      name:formData.name,     
      phoneNumber:formData.phoneNumber,
      email:formData.email,     
      address:formData.address,
      city:formData.city,
      state:formData.state,
      pinCode:formData.pinCode,
      
    };
    if (formData.isUpdate) {
      var answer = window.confirm(
        "Data once modified can not be restored, do you want to continue?"
      );
      if (answer === true) {
        AddressService.updateContact(params.id, object)
          .then((response) => {
            console.log(response.data.data);
            alert("Data updated successfully");
          })
          .catch((error) => {
            alert("Warning: error while updating the data ", error);
          });
      } else {
        window.location.reload();
      }
    } else {
  AddressService.addContact(object)
  .then((response) => {
    console.log(response.data.data);
    alert("Contact added successfully");
  })
  .catch((error) => {
    console.log(error);
    alert("Warning");
  });

  }
}

  const handelAddressChange =(event)=>{
    const addresses=event.target.value.split(',');
    setFormData({...formData,address:addresses})
  };
 
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  
  

  // States and cities data
  const statesAndCities = {
    'Madhya Pradesh': ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Seoni", "Reva", "Murena"],
    'Maharashtra': ["Mumbai", "Pune", "Nagpur", "Thane"],
    'Rajasthan': ['Jaipur', 'Udaipur', 'Jodhpur'],
    "Uttar Pradesh": ["Bareli", "Gorakhpur", "Lakhnao", "Agra", "Jhansi"]
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setState(selectedState);
    setCity('');
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className='addressForm'>

    <form id='form' className='form'>
        
        <div className='heading' id='heading'>
            <h1>PERSON ADDRESS FORM  </h1>
        </div>
        <div className='formGroup'>
        <label htmlFor="persion-name">Full Name</label>
        
<input type="text" id="personName" name="name" className="input-text" 
value={formData.name}
onChange={handleInputChange}/>
        </div>
        <div className='formGroup'>
        <label htmlFor="persion-phone">Phone Number</label>
        
<input type="text" id="personPhone" name="phoneNumber" className="input-text" 
value={formData.phoneNumber}
onChange={handleInputChange}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id='email' name='email' className='input-text'
          value={formData.email}
          onChange={handleInputChange} />
        </div>
        <div className='formGroup'>
        <label htmlFor="Address">Address</label>
        
<input type="text" id="address" name="address" className="input-address" 
onChange={handelAddressChange}
value={formData.address.join(', ')}/>

        </div>
        <div className='cityStateZip'>
          <label htmlFor="state">State</label>
          <select
            id="state"
            value={state} name='state'
            
            onChange={handleStateChange}
            onClick={handleInputChange}
          >
            <option value="">Select State</option>
            {Object.keys(statesAndCities).map((stateOption, index) => (
              <option key={index}  value={stateOption}>
                {stateOption}
              </option>
            ))}
          </select>

          <label htmlFor="city">City</label>
          <select
            id="city"
            value={city} name='city'
            onChange={handleCityChange}
            onClick={handleInputChange}
            disabled={!state}
          >
            <option value="">Select City</option>
            {state && statesAndCities[state].map((cityOption, index) => (
              <option key={index} value={cityOption}>
                {cityOption}
              </option>
            ))}
          </select>

          <label htmlFor="zip">PinCode</label>
          <input
            type="text"
            id="zip"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleInputChange}
          />
        </div>
        <div className='buttons'>
        <Link className='add-btn' to="/">
          <button type='Add'
            onClick={save} id="add-btn" className="button"value="Add" >{
              formData.isUpdate ? "Update" : "Add"
            }</button>
              </Link>
          <button type="button" id="resetButton" className="button">Reset</button>
        </div>
      </form>
    </div>
  );


}
export default AddressForm;
