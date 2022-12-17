import Loginform from "./components/Loginform";
import Homepage from "./components/Homepage";
import Interventionrequest from "./components/Interventionrequest";
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";

function App() {
  //Variables for Login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //Variables for Intervention Form
  const [customerID, setCustomerID] = useState("");
  const [buildingID, setBuildingID] = useState("");
  const [batteryID, setBatteryID] = useState("");
  const [columnID, setColumnID] = useState("");
  const [elevatorID, setElevatorID] = useState("");
  const [report, setReport] = useState("");
  
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
        <Route path='/intervention' element={<Interventionrequest
        customerID={customerID}
        setCustomerID={setCustomerID}
        buildingID={buildingID}
        setBuildingID={setBuildingID}
        batteryID={batteryID}
        setBatteryID={setBatteryID}
        columnID={columnID}
        setColumnID={setColumnID}
        elevatorID={elevatorID}
        setElevatorID={setElevatorID}
        report={report}
        setReport={setReport}>
        </Interventionrequest> } />
      </Routes>
    </>
  );
}

export default App;
