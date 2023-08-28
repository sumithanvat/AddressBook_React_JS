import React, { useState } from 'react';

function AddressForm() {
  let initialValue={
    fullName:"",
    phoneNumber:"",
    address:"",
    city:"Jabalpur",
    state:"Madhya Pradesh"

  }
  const[formData,setFormData]=useState(initialValue);
  const handleInputChange =(event) => {
    console.log(event.target.name);
    setFormData({...formData,[event.target.name]:event.target.value});

  };
  const handleAdd =() =>{
    console.log(formData)
  }

 
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  

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
        <br></br>
<input type="text" id="personName" name="fullName" className="input-text" 
onChange={handleInputChange}/>
        </div>
        <div className='formGroup'>
        <label htmlFor="persion-phone">Phone Number</label>
        <br></br>
<input type="text" id="personPhone" name="phoneNumber" className="input-text" 
onClick={handleInputChange}/>
        </div>
        <div className='formGroup'>
        <label htmlFor="Address">Address</label>
        <br></br>
<input type="text" id="address" name="address" className="input-address" onClick={handleInputChange}/>
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

          <label htmlFor="zip">ZIP Code</label>
          <input
            type="text"
            id="zip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
        </div>
        <div className='buttons'>
          <button type="button" id="addButton" className="button"
          onClick={handleAdd}>Add</button>
          <button type="button" id="resetButton" className="button">Reset</button>
        </div>
      </form>
    </div>
  );
}

export default AddressForm;
