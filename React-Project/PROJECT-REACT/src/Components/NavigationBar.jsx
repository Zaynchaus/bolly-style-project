import { Link } from "react-router-dom"
import style from "../Components/Navbar.module.css"
import { cart, login, register } from "./NavLogo"
import { LandingPage } from "./Landing"
import {useSelector,} from "react-redux"
import {Handelreducer} from "../Views/Redux/Reducer/HandleReducer"
    

function NavigationBar() {
    const a=useSelector((state)=>state.Handelreducer)

    return (
        <>
            <nav className={style.nav}>

                <h2 className={style.TEXT}>Bollywood <span>Style</span> </h2>
                <ul className={style.hading}> 

                   <Link to="/"><li>Home</li></Link> 
                  <Link to="Product"><li>Product</li></Link>
                 <Link to="AboutUs"><li>About</li></Link>    
                 <Link to="Build"><li>Contect</li></Link>  
                     


                </ul>

                <div className={style.Navbtn} >
                    <Link  to="Login"><button> {login} Login</button></Link>
                    <Link to="Register"><button>{register} Register</button></Link>
                    <Link to="cart"><button>{cart} Cart({a.length})</button></Link>
                </div>

            </nav>
            
            {/* <div className={style.img}>
                <div className={style.imgtext}>
                    <h1>NEW SESSION ARRIVALS</h1>
                    <h2>CHECK OUT ALL TRENDS <span>MENS_</span></h2>
                </div>
            </div> */}

        </>
    )

}
export default NavigationBar