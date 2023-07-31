import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import ConfBook from "./pages/BookConf/bookconf";
import Bookings from "./pages/Bookings/Bookings";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<List/>}/>
        <Route path="/confbook/:id" element={<ConfBook/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/bookings" element={<Bookings/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
