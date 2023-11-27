import Header from "./components/Layouts/Header.js";
import './App.css';
import Footer from './components/Layouts/Footer.js';
import Layout from "./components/Layouts/Layout.js";
import { Route,Routes,Link } from "react-router-dom";
import Login from "./pages/Login.js";
import { UserContextProvider } from "./UserContext.js";
import Best from "./pages/Best.js";
import Blogs from "./pages/Blogs.js";
import Learn from "./pages/Learn.js";
import Nearby from "./pages/Nearby.js";
import Reminder from "./pages/Reminder.js";
import Status from "./pages/Status.js";
import Register from "./pages/Register.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/best" element={<Best/>}/>
      </Routes>
    </>
  );
}

export default App;
