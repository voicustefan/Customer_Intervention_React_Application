import styles from "../style.module.css";
import { useNavigate } from "react-router-dom";

const Loginform = ({email, setEmail, password, setPassword}) => {
    const navigate = useNavigate();
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
        //console.log(email);
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }
    async function handleSubmit(event) {
        event.preventDefault();
        // console.log(email, password);
        await login();
        navigate("/home");
    }
    async function login(){
        let item = {email, password};
        let result = await fetch(`https://java-api.codeboxxtest.xyz/authenticate?email=${email}&password=${password}`,
        {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "accept": 'application/json'
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        // history.pushState("/");
        
    }

    return (
        <div >
        <div className={styles.header}>Client Login</div>
            <div className={styles.loginform}>
                <form onSubmit={handleSubmit}>
                    <input value={email} onChange={handleChangeEmail}
                    className={styles.loginforminput} placeholder="Email"></input>
                    <br></br>
                    <input type="password" value={password} onChange={handleChangePassword}
                    className={styles.loginforminput} placeholder="Password"></input>
                    <br></br>
                    <button type="submit"
                     className={styles.loginformbutton}>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Loginform;