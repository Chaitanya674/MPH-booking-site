import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState , useEffect } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { Link } from "react-router-dom";
import axios from "axios";

const List = () => {
  const location = useLocation();
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://mphbooking.onrender.com/api/book');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Book</h1>
            <div className="lsItem">
              <label>Booking Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Participants</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>

              </div>
            </div>
          </div>
          <div className="listResult">
          {data.map(item => (
            <div key={item._id} className="card" style={{ backgroundColor: 'lightblue' , padding:"10px", margin:"10px"}}>
              <h3>{item.name}</h3>
              {item.name === "MHP" && <img src="https://i.pinimg.com/236x/8b/77/ae/8b77ae47f382eeaa8ea445e05ffbf91f--hall.jpg" width="250"></img>}
              {item.name === "Auditorium" && <img src="https://rulonco.com/wp-content/uploads/2022/04/Chisolm-Trail-HS-1-1024x683.jpg" width="250"></img>}
              {item.name === "Playground" && <img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Weeke_-_playing_field%2C_playground_and_shops_-_geograph.org.uk_-_50432.jpg" width="250"></img>}
              <br/>
              <button style={{border: "5px", margin:"8px"}}><Link to={`/confbook/${item._id}`}>Book</Link></button>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
