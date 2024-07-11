import React from "react";
import style from '../Views/CSS/AboutUs.module.css'

function AboutUs () {
    return (
        <div>
            
<div className={style.img}>
<div className={style.imgtext}></div>

<div className={style.mainText}>
       <h1 className={style.h1}> About Us</h1>
        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, quis ipsum aliquam corrupti alias iste illum, in porro, molestias maiores iure fuga dolo <br />
        <br />
            Laborum quos ipsum blanditiis vitae a eius itaque sed, molestias, vero neque quod eaque et nostrum. Cumque veniam, facilis, sapiente consequuntur hic <br />
            <br />  
             dolores sint, sapiente optio tempora eum consectetur, asperiores quod repellat quae atque sunt nostrum beatae verit.</p>
             <br /> <br />
                          <ul className={style.web}>
                            <li>Web design</li>
                            <li>Photoshop & coding</li>
                            <li>Coding</li>
                              
                          </ul>
             </div>
</div>
        
        </div>
    )
}

export default AboutUs