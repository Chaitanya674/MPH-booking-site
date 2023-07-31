import React, { useEffect, useState , useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { AuthContext } from '../../context/AuthContext';

const ConfBook = () => {
  const { id } = useParams();
  const [slot, setSlot] = useState({});
  const [selectedSlot, setSelectedSlot] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/book/${id}`);
      const { slots, name } = response.data;
      const slotArray = Object.keys(slots).map((key) => ({ slotNumber: key, status: slots[key] }));
      setSlot({ name, slots: slotArray });
      console.log(slots);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleBookSlot = async (slotNumber) => {
    try {
      await axios.patch(`/api/book/${id}/${slotNumber}/${user}`, { slots: { ...slot.slots } });
      setSelectedSlot(slotNumber);
      fetchData(); 
    } catch (error) {
      console.error('Error updating slot status:', error);
    }
  };

  if (!slot.slots) {
    return <p>Loading...</p>;
  }

  const { name, slots } = slot;

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div>
        <div>
          <h1>{name}</h1>
          {slots.length ? (
            slots.map((slotItem, index) => (
              slotItem.status ? (
                <div key={index} className="card" style={{ backgroundColor: 'lightblue', padding: '10px', margin: '10px' }}>
                  <h2>Slot {slotItem.slotNumber}</h2>
                  {selectedSlot === slotItem.slotNumber ? (
                    <p>Slot Booked!</p>
                  ) : (
                    <button onClick={() => handleBookSlot(slotItem.slotNumber)}>Available</button>
                  )}
                </div>
              ) : 
              (
                <div key={index} className="card" style={{ backgroundColor: 'lightblue', padding: '10px', margin: '10px' }}>
                  <h2>Slot {slotItem.slotNumber}</h2>
                    <p>Slot Booked!</p>
                </div>
              )
            ))
          ) : (
            <p>Slot already booked.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfBook;
