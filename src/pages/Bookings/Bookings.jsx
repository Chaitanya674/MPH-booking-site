import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { AuthContext } from "../../context/AuthContext";

const Bookings = () => {
  const [slot, setSlot] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/userbooks/${user}`, {params : `${user}`});
      const data = response.data;
      if (!data || !data.user.slots) {
        throw new Error('No slots data available');
      }
      setSlot(data.user.slots);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (!slot) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div>
        <div>
          <h1>Bookings</h1>
          {Object.entries(slot).map(([slotNumber, status]) => (
            <div
              key={slotNumber}
              className="card"
              style={{
                backgroundColor: status ? 'lightblue' : 'lightgray',
                padding: '10px',
                margin: '10px',
              }}
            >
              <h2>Slot {slotNumber}</h2>
              {status ? <p>Slot Available</p> :<p>Slot Booked!</p> }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
