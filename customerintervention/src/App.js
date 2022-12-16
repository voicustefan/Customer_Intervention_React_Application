import Loginform from "./components/Loginform";
import Homepage from "./components/Homepage";
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";

function App() {
  //Variables for Login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //Function to show list of interventions in homepage
  return (
    <>
      <Routes>
        <Route path='/' element={<Loginform 
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}>
        </Loginform>} />
        <Route path='/home' element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
