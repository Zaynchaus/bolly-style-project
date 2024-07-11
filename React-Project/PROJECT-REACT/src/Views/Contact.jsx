import style from "../Views/CSS/Contact.module.css"
import React from "react";
function Build() {
    return (
       <>
        
            <div className={style.img}>
                <div className={style.imgtext}></div>
                <center><h1 className={style.us}>Contact Us</h1></center>

               <center> <p className={style.h4}><b>Express yourself through fashion <br />
                {/* <br /> */}
                Everything you need to know. “Everything You Need To Know About Boosting Your Productivity”</b></p></center>
                  <div className={style.location}>
                <p className={style.Address}><img className={style.Address2} src="https://www.svgrepo.com/show/127575/location-sign.svg" alt="" width={'13px'} /> Address</p>
                    <p className={style.p}>4671 Sugar Camp Road,
                    <br />
                    Owatonna,Minnesota,
                    <br />
                    55060</p>
                      <br />

                    <p className={style.Phone}><img className={style.Phone2} src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png" alt="" width={'15px'}/> Phone</p>
                    <p className={style.p2}>507-475-60945-6094</p>
                    <br />

                    <p className={style.Email}><img className={style.email2} src="https://static.vecteezy.com/system/resources/previews/020/009/601/original/email-and-mail-icon-black-free-png.png" alt="" width={'15px'} /> Email</p>
                    <p className={style.p3}>wrub7d78i0@temporary-mail.net</p>
                    </div>

                    

                      {/* <div className={style.Form}>
                    <h4 className={style.msg}>Send Message</h4>
                    <u className={style.U3}><input type="text" placeholder ="Full Name" /></u><br  /> 
                        <br />
                        <br />
                        <u className={style.U}><input type="text" placeholder="Email" /><br /></u> 
                        <br />
                        <br />
                        <u className={style.U2}><input type="text" placeholder="Type Your Message..." /><br /></u> 
                        <br />
                        <br />
                        <button>Send</button>
                    </div>   */}

<div className={style.top}>
                    <h3 className={style.msg}>Send Message</h3> <br />
                    
                    <input className={style.ind} type="text" placeholder="Full Name" /><br />
                    <br />
                    <input className={style.ind} type="text" placeholder="Email" /><br />
                    <br />
                    <input className={style.ind} type="text" placeholder="Type ypur message" /><br />
{/* <label htmlFor="">Full Name</label><br /> <hr /> */}
                    {/* <label htmlFor="">Email</label> <br /> <hr />
                    <label htmlFor="">Type your Message...</label> <br /><hr /> */}
                    <button className={style.btn}>Send</button>
            </div>
        <br />
            </div>
        <br />
        

        
        </>
        
    )
}
export default Build;