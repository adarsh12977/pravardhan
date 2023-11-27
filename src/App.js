import Header from "./components/Layouts/Header.js";
import './App.css';
import Footer from './components/Layouts/Footer.js';
import Layout from "./components/Layouts/Layout.js";
import { Route,Routes,Link } from "react-router-dom";
import Login from "./pages/Login.js";
import { UserContextProvider } from "./UserContext.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
