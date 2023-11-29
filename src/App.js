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
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer.js";
import IndexPage from "./pages/IndexPage.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<IndexPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/best" element={<Best/>}/>
        <Route path="/status" element={<Status/>}/>
        <Route path="/learn" element={<PathfindingVisualizer/>}/>
        <Route path="/remind" element={<Reminder/>}/>
        <Route path="/nearby" element={<Nearby/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
      </Routes>
    </>
  );
}

export default App;
