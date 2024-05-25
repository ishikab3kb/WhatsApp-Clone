import "./App.css";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
import Login from "./Components/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user } ,dispatch] = useStateValue();

  return (
    //BEM naming convention
    <div className="app">
      {/* <h1>Lets build whatsapp</h1> */}

      {!user ? (
        <Login></Login>
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar></Sidebar>
            <Routes>
              <Route path="/rooms/:roomId" element={<Chat></Chat>}></Route>
              <Route path="/" element={<></>}></Route>
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
