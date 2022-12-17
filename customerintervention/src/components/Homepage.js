import { useEffect, useState } from "react";
import styles from "../style.module.css";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
    const [interventions, setInterventions] = useState([]);
    useEffect(() => {
        const response = fetch(`https://java-api.codeboxxtest.xyz/interventions`,
            {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjdXN0b21lcjFAYnVzaW5lc3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9qYXZhLWFwaS5jb2RlYm94eHRlc3QueHl6L2F1dGhlbnRpY2F0ZSJ9.QbJsJ-MZXWieFf_fcAkNWI3S9Skqd-yFVF3S2h-uhfo",
                    "content-type": "application/json",
                    "accept": 'application/json'
                }
            })
            .then((res) => res.json())
            .then((res) => res)
        console.log(response);
        console.log(Object.values(response));
        setInterventions(response);
        //  console.log(interventions);

    }, []);
    // console.log(interventions);
    // const obj = JSON.parse(interventions);
    // for(let i = 0; i < interventions.length; i++){

    // }
    const navigate = useNavigate();
    function changepage() {
        navigate("/intervention");
    }
    return (
        <div>
            <div className={styles.header}>Home Page</div>
            <br></br>
            <div>
                <table border="1">
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>CustomerID</td>
                            <td>BuildingID</td>
                            <td>BatteryID</td>
                            <td>ColumnID</td>
                            <td>ElevatorID</td>
                            <td>EmployeeID</td>
                            <td>AuthorID</td>
                        </tr>
                        {/* {
                            interventions.map((item, i) =>
                                <tr key={i}>
                                    <td>{item.id}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            )
                        } */}
                    </tbody>
                </table>
            </div>
            <div>
                <button className={styles.changebutton} onClick={changepage}>Intervention Form</button>
            </div>
        </div>
    )
}
export default Homepage;