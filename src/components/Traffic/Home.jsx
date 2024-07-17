import React from 'react';
import './Home.css';
import image from '../../assets/samir.png'

const PedRecords = () => {
  return (
    <div className="ped-records">
      <div className="header">
        <h1>Traffic Violence Tracker</h1>
        <nav>
          <button className="active">PED RECORDS</button>
          <button>VEHICLE RECORDS</button>
        </nav>
      </div>
      <div className="content">
        <div className="search-section">
          <h2>SEARCH PED</h2>
          <ul>
            <li>Samir (M)</li>
            <li>Chamru (M)</li>
          </ul>
        </div>
        <div className="details-section">
          <div className="personal-info">
            <img src={image} alt="Profile" />
            <div className="info">
              <p><b>First Name:</b> Samir</p>
              <p><b>Last Name:</b> Gay</p>
              <p><b>Sex:</b> Male</p>
              <p><b>Age:</b> 25</p>
              <p><b>DOB:</b> 1/27/1998</p>
              <p><b>Address:</b> Bhairahawa, Shiv Mandir</p>
            </div>
          </div>
          <div className="status-info">
            <p>Driver License Status:<span className="highlight">Expired (106 days)</span></p>
            <p>Outstanding Warrant: <span className="highlight">Arrest Warrant for Failure to Present Concealed Carry Permit</span></p>
            <p>Has Gun Permit: No</p>
            <p>Gun License:N/A</p>
            <p>Times Stopped: 0</p>
            <p>Probation: No</p>
            <p>Parole: No</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PedRecords;
