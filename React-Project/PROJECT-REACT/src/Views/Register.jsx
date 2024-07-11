import React from "react";
import style from "../Views/CSS/Register.module.css"

function Register(){
    return(
        <div>
            <div className={style.color}>
            <div className={style.Register}>
        <h1>Register</h1><br />
        <input type="text" placeholder="User Name" /><br />
        <br />
        <input type="text" placeholder="Email" /><br />
        <br />
        <input type="text" placeholder="Password" /><br />
        <br />
        <button className={style.btn}>Register</button><br />

          <h2 className={style.login}>Login</h2>
        </div>
            </div>
        </div>
    )
}

export default Register;