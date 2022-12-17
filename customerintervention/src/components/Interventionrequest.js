import styles from "../style.module.css";

const Interventionrequest = ({customerID, setCustomerID, buildingID, setBuildingID, batteryID, setBatteryID, columnID, setColumnID, elevatorID, setElevatorID, 
    report, setReport}) => {
    const handleChangeCustomer = (event) => {
        setCustomerID(event.target.value);
    }
    const handleChangeBuilding = (event) => {
        setBuildingID(event.target.value);
    }
    const handleChangeBattery = (event) => {
        setBatteryID(event.target.value);
    }
    const handleChangeColumn = (event) => {
        setColumnID(event.target.value);
    }
    const handleChangeElevator = (event) => {
        setElevatorID(event.target.value);
    }
    const handleChangeReport = (event) => {
        setReport(event.target.value);
    }
    async function submitform(){
        let item = {customerID, buildingID, batteryID, columnID, elevatorID, report};
        let result = await fetch(`https://java-api.codeboxxtest.xyz/interventions/new?customerID=${customerID}&buildingID=${buildingID}&batteryID=${batteryID}&columnID=${columnID}&elevatorID=${elevatorID}&report=${report}`,
        {
            method: 'POST',
            headers: {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjdXN0b21lcjFAYnVzaW5lc3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9qYXZhLWFwaS5jb2RlYm94eHRlc3QueHl6L2F1dGhlbnRpY2F0ZSJ9.QbJsJ-MZXWieFf_fcAkNWI3S9Skqd-yFVF3S2h-uhfo",
                "content-type": "application/json",
                "accept": 'application/json'
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
    }

    return (
        <div>
            <div className={styles.header}>Intervention Request</div>
            <div>
                <form onSubmit={submitform}>
                <br></br>
                    <input className={styles.loginforminput} onChange={handleChangeCustomer} placeholder="CustomerID"></input>
                    <br></br>
                    <input className={styles.loginforminput} onChange={handleChangeBuilding} placeholder="BuildingID"></input>
                    <br></br>
                    <input className={styles.loginforminput} onChange={handleChangeBattery} placeholder="BatteryID"></input>
                    <br></br>
                    <input className={styles.loginforminput} onChange={handleChangeColumn} placeholder="ColumnID"></input>
                    <br></br>
                    <input className={styles.loginforminput} onChange={handleChangeElevator} placeholder="ElevatorID"></input>
                    <br></br>
                    <input className={styles.loginforminput} onChange={handleChangeReport} placeholder="Report"></input>
                    <br></br>
                    <button className={styles.loginformbutton}>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Interventionrequest;