import React from 'react';
import Book from './Book1.png'


function PersonDetails(){
    

    
    


    return(
        <div className='MainDiv'>
            <header>
                <div className='logoDiv'>
                    <img src={Book} alt="" />

                </div>
                <div className='textcontainer'>
                <div className='textDiv'><h3>Address</h3></div>
                <div className='textDiv2'><h3>Book</h3></div>
                </div>
            </header>
            <div className='TableDiv'>
                <h2>Person Details</h2>
                <table className="address-table">
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Zip Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Populate the table rows here */}
                        </tbody>
                    </table>
            </div>


        </div>
    )

}
export default PersonDetails;