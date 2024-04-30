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
    await fetch('http://localhost:4000/getphone', {
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
    await fetch('http://localhost:4000/listusers')
      .then((resp) => resp.json())
      .then((data) => {
        setAllUsers(data);
      });
  };

  const removeUser = async (username) => {
    await fetch('http://localhost:4000/removephone', {
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

    await fetch('http://localhost:4000/removeuser', {
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
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={{
        overlay: {
          backgroundColor: 'rgba(10, 10, 10, 0.7)',
        },
        content: {
          width: '30%',
          height: '50%',
          margin: 'auto',
          borderRadius: '20px',
          border: 'none',
          padding: '20px',
          background: '#fff',
          boxShadow: '1px 1px 4px 8px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '30px',margin: "50px" }}>Phone Numbers </h1>
      </div>
      <div>
        {phoneNumbers.length === 0 ?<div style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          height:"100%"
        
        }}><h1>No phone numbers found</h1></div>:
           phoneNumbers.map((phone, index) => {
            return (
              <div className="phone-item" style={{width:"100%",display:"flex",justifyContent:"center",marginBottom:"20px"}} key={index}>
                <h3>{phone}</h3>
              </div>
            );
          })
        }
       

      </div>
      
    </Modal>
  </div>
</>

  );
};

export default ListUser;
