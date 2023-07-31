import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error , setError] =  useState('');
  
    const handleRegister = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('/api/register', { username, password });
        console.log(response.data);
      } catch (err) {
        console.error('Error during registration:', err.response.data);
        setError(err.response.data);
      }
    };

  return (
    <div className="login">
      <div className="lContainer">
        <form onSubmit={ handleRegister }>
            <input
                type="text"
                placeholder="username"
                id="username"
                className="lInput"
                value={username} onChange={(e) => setUsername(e.target.value)} required 
            />
            <input
                type="password"
                placeholder="password"
                id="password"
                className="lInput"
                value={password} onChange={(e) => setPassword(e.target.value)} required
            />
            <button type="submit" className="lButton">
                Register
            </button>
        </form>
        {setError ? <span>{error}</span> : <></>}
      </div>
    </div>
  );
};

export default Register;
