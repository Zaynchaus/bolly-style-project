import React from "react";
import style from '../Views/CSS/Login.module.css'

function Login (){
    return(
        <div>
          <div className={style.color}>
        <div className={style.h1}>
            
      <h1 className={style.Login}>Login</h1>
      <input type="text" placeholder="Username" /><br />
      <br />
      <input type="text" placeholder="Password" /><br />
       <br />
      <button className={style.btn}>Let Me In</button>
      </div>
      </div>
        </div>
    )
}

export default Login;