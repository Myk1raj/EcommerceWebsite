import React, { useEffect, useState } from 'react';
import './ListEmployees.css';
import cross_icon from "../Assets/cross_icon.png";
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import Sidebar from '../Sidebar/Sidebar';

const ListEmployee = () => {
  const [allEmployees, setAllEmployees] = useState([]);

  const fetchEmployees = async () => {
    await fetch('http://localhost:4000/listemployees')
      .then((resp) => resp.json())
      .then((data) => {
        setAllEmployees(data);
      });
  };

  const removeEmployee = async (username) => {
    await fetch('http://localhost:4000/removeemployee', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username }),
    });
    await fetchEmployees();
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <>
  <AdminNavbar />
  <div className='admin-panel-container'>
    <Sidebar />
    <div className='employee-list-container'>
      <div className="employee-list-header">
        <p>Name</p>
        <p>ID</p>
        <p>Branch ID</p>
        <p>Username</p>
        <p>Password</p>
        <p>Remove</p>
      </div>
      <div className="employee-list">
        <hr />
        {allEmployees.map((employee, index) => {
          return (
            <div key={index} className="employee-item">
              <p>{employee.name}</p>
              <p>{employee._id}</p>
              <p>{employee.branchID}</p>
              <p>{employee.username}</p>
              <p>{employee.password}</p>
              <img className='remove-icon' onClick={() => { removeEmployee(employee.username) }} src={cross_icon} alt="Remove" />
            </div>
          );
        })}
      </div>
    </div>
  </div>
</>

  );
};

export default ListEmployee;
