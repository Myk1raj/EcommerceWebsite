import React, { useEffect, useState } from 'react';
import './ListUsers.css'
import cross_icon from "../Assets/cross_icon.png";
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import Sidebar from '../Sidebar/Sidebar';
import Modal from 'react-modal';
import user_icon from '../Assets/user_icon.png';
Modal.setAppElement('#root'); // This line is needed for accessibility reasons
const ListUser = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const getphoneNumbers = async (username) => {
    await fetch('https://ecommerce-backend-bimx.onrender.com/getphone', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "auth_token": `${localStorage.getItem('auth_token')}`,
      },
     body: JSON.stringify({ id: username }),
    }).then((resp) => resp.json()).then((data) => {
      console.log(data);
      setPhoneNumbers(data);
    });
  };


  const fetchUsers = async () => {
    await fetch('https://ecommerce-backend-bimx.onrender.com/listusers')
      .then((resp) => resp.json())
      .then((data) => {
        setAllUsers(data);
      });
  };

  const removeUser = async (username) => {
    await fetch('https://ecommerce-backend-bimx.onrender.com/removephone', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            "auth_token": `${localStorage.getItem('auth_token')}`,
        },
        body: JSON.stringify({ username: username }),
        }).then((resp) => resp.json()).then((data) => {
            console.log(data);
        });

    await fetch('https://ecommerce-backend-bimx.onrender.com/removeuser', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username }),
    });
    await fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const runfn = (username) => {
    getphoneNumbers(username);
    setModalIsOpen(true);
  };

  return (
    <>
  <AdminNavbar />
  <div className='admin-panel-container2'>
    <Sidebar />
    
    <div className='user-list-container'>
      
      <div className="user-list-header">
        <p>Name</p>
        <p>ID</p>
        <p>Username</p>
        <p>Password</p>
        <p>Date</p>
        <p>Remove</p>
      </div>
      <div className="user-list">
        <hr />
        {allUsers.map((user, index) => {
          return (
            <div onClick={()=>{runfn(user._id)}} className="user-item" key={index}>
                <p>{user.name}</p>
                <p>{user._id}</p>
                <p>{user.username}</p>
                <p>{user.password}</p>
                <p>{new Date(user.date).toLocaleDateString()}</p>
                <img className='remove-icon' onClick={() => { removeUser(user.username) }} src={cross_icon} alt="Remove" />
            </div>
          );
        })}
      </div>
    </div>
    
  </div>
</>

  );
};

export default ListUser;
