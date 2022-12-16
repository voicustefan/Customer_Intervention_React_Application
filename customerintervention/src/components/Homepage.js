import { useEffect } from "react";
import styles from "../style.module.css";

const Homepage = () => {
    useEffect(() => {
        fetch("https://java-api.codeboxxtest.xyz/interventions?Bearer=Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjdXN0b21lcjFAYnVzaW5lc3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9qYXZhLWFwaS5jb2RlYm94eHRlc3QueHl6L2F1dGhlbnRpY2F0ZSJ9.QbJsJ-MZXWieFf_fcAkNWI3S9Skqd-yFVF3S2h-uhfo").then((result) => {
            result.json().then((response) => {
                console.warn(response);
            })
        })
    })
    return (
        <div>
        <div className={styles.header}>Home Page</div>
        <div></div>
        </div>
    )
}
export default Homepage;