import style from "../Components/Navbar.module.css"
import { Typewriter } from 'react-simple-typewriter'

export const LandingPage = () => {
    return (
        <div className={style.img}>
            <div className={style.imgtext}>
                <h1>NEW SESSION ARRIVALS</h1>
                <h2>CHECK OUT ALL TRENDS <span style={{ color: 'red', fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        loop
                        cursor
                        cursorStyle='_'
                        typeSpeed={90}
                        deleteSpeed={80}
                        delaySpeed={1000}
                        words={[' MENS ', ' WOMENS ', ' JEWELERY ', ' ELECTRONICS']}
                        onLoop={(loopCount) =>
                            console.log(`Just completed loop ${loopCount}`)
                        }
                    />
                </span>
                </h2>


            </div>
        </div>
    )
}