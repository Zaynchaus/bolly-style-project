import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"


export const Cart = () => {

    const [qty, setqty] = useState(0)

    const Ondecriment = () => {
        setqty(qty - 1)
    }

    const Onincrement = () => {
        setqty(qty + 1)
        

    }
    const getvalue = (e) => {
        let x = e.target.value
        setqty(x)
    }


// const dispatch = useDispatch();
const data = useSelector((state) => state.Handelreducer)
// console.log(item);


return (
    <>
        <div>
            {data.map((data) => {
                return (
                    <div style={{ display: "flex", marginTop: "10rem", justifyContent: "space-around", border: "2px solid silver ", width: "100%", height: "100%", backgroundColor: "antiquewhite" }}>


                        <img style={{ width: "10%", height: "100%" }} src={data.image} />
                        <div style={{ display: "flex", alignItems: "center" }}>

                            <div style={{marginRight:'50px'}}>
                            <p>{data.title}</p>
                            <p>${data.price}</p>
                            </div>
                            




                            <div >
                                <Button onClick={() => Ondecriment()}>-</Button>{" "}
                                <input onChange={getvalue} style={{ height: "20px", width: "50px" }} type="number" placeholder={qty} />{" "}
                                <Button onClick={() => Onincrement()}>+</Button>{" "}
                            </div>

                            <div>
                            <h3>Total <br /><span>${data.price}</span></h3><br />
                            <button style={{ height: '30px', width: '100px' , marginLeft:'' }}>Remove</button>
                            </div>
                            
                        </div>
                    </div>

                )
            })}             
        </div>


    </>
)
        }