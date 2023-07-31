import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error , setError] =  useState('');
  const navigate = useNavigate();
  const { loading, erro, dispatch } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await axios.post('/api/login', { username, password });
      const token = response.data.userId; 
      dispatch({ type: "LOGIN_SUCCESS", payload: token });

      navigate('/');
    } catch (err) {
      dispatch({ type: "LOGIN_FAILED", payload: err });
      console.error('Error during login:', err.response.data);
      setError(err.response.data);
    }
  };


  return (
    <div className="login">
      <div className="lContainer">
        <form onSubmit={handleLogin}>
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
          <button disabled={loading} className="lButton">
            Login
          </button>
        </form>
        {setError ? <span>{error}</span> : <>{erro}</>}
      </div>
    </div>
  );
};

export default Login;
