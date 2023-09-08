import React, { useEffect, useState } from 'react';
import Book from './Book1.png';
import addImage from '../images/add-24px.svg';
import AddressService from '../Service/AddressService';
import editIcon from '../images/create-black-18dp.svg';
import deleteIcon from '../images/delete-black-18dp.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function PersonTable() {
  const navigate = useNavigate();
  const [contactArray, setContactArray] = useState([]);
  const [allContactArray, setAllContactArray] = useState([]);

  const update = (id) => {
    console.log('Update method calling', id);
    navigate(`editform/${id}`);
  };

  useEffect(() => {
    console.log('Life cycle method');
    getAllContact();
  }, []);

  const getAllContact = () => {
    AddressService.getAllContact()
      .then((response) => {
        console.log(response);
        setContactArray(response.data.data);
        setAllContactArray(response.data.data);
        console.log(response);
      })
      .catch((err) => {
        alert('Something went wrong while getting record ', err);
      });
  };

  const remove = (id) => {
    console.log(id);
    var answer = window.confirm(
      'If Data is deleted, you cannot restore. Do you want to continue?'
    );
    if (answer === true) {
      AddressService.deleteContact(id)
        .then((response) => {
          alert('Contact deleted successfully', response.data.data);
          window.location.reload();
          getAllContact();
        })
        .catch((error) => {
          alert('Something went wrong');
        });
    } else {
      alert('Contact not deleted');
    }
  };

  return (
    <div className="MainDiv">
      <header>
        <div className="logoDiv">
          <img src={Book} alt="" />
        </div>
        <div className="textcontainer">
          <span>Address</span>
          <br />
          <span>Book</span>
        </div>
        <div className="addLink">
          <Link className="add-btn" to="/add">
            <img src={addImage} alt="Add User" />
            <span>Add</span>
          </Link>
        </div>
      </header>
      <div className="TableDiv">
        <h2>Person Details</h2>
        <table className="address-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Pin Code</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contactArray &&
              contactArray.map((contact, index) => (
                <tr key={`${index}`}>
                  <td>{contact.name}</td>
                  <td>{contact.phoneNumber}</td>
                  <td>{contact.email}</td>
                  <td>{contact.address}</td>
                  <td>{contact.city}</td>
                  <td>{contact.state}</td>
                  <td>{contact.pinCode}</td>
                  <td>
                    <img
                      onClick={() => remove(contact.id)}
                      src={deleteIcon}
                      alt="delete"
                    />
                    <img
                      onClick={() => update(contact.id)}
                      src={editIcon}
                      alt="edit"
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PersonTable;
