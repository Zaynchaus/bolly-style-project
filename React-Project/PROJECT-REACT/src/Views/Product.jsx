import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import style from "../Views/CSS/Product.module.css"


const Product = () => {
    const [data, setData] = useState([]);
    console.log(data);
    const [filter, setFilter] = useState(data);
    let componentMounted = true;
   
    useEffect(() => {
        const getproduct = async () => {
            const response = await fetch("https:fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                // console.log(filter)
            }
            return () => {
                componentMounted = false;
            }
        }
        getproduct();
    }, [])

    const FilterProduct = (cat) => {
        const UpdateList = data.filter((x) => x.category === cat);
        setFilter(UpdateList);

    }

    const Showproduct = () => {
        const navigate = useNavigate()
        const onclick = (id) => {
             
            navigate(`/details/${id}`)
        }
        return <>



            <div className={style.Allbtn}>
                <Button style={{ color: "white", backgroundColor: "black" }} onClick={() => setFilter(data)}> All </Button>
                <Button style={{ color: "white", backgroundColor: "black" }} onClick={() => FilterProduct("men's clothing")}>Men's Clothing</Button>
                <Button style={{ color: "white", backgroundColor: "black" }} onClick={() => FilterProduct("women's clothing")}>Women's Clothing</Button>
                <Button style={{ color: "white", backgroundColor: "black" }} onClick={() => FilterProduct("jewelery")}>Jewelery</Button>
                <Button style={{ color: "white", backgroundColor: "black" }} onClick={() => FilterProduct("electronics")}>Electronics</Button>
            </div>
            <br />

            <div className={style.carddiv}>

                {filter.map((item) => {
                    return (
                        <>
                            <div className={style.carddiv2}>
                                <Card style={{ margin: "60px", width: "300px" }} className={style.card} key={item.id}>
                                    <Card.Img className={style.crdimg} src={item.image} height={"250px"} /> <br />
                                    <Card.Body>
                                        <Card.Title style={{ marginLeft: "35%" }}>{item.title.substring(0, 12)}</Card.Title> <br />
                                        <Card.Title style={{ marginLeft: "45%" }}>
                                            {item.price}:$
                                        </Card.Title>
                                        {' '} <br />
                                        <Button style={{ marginLeft: "100px" }} onClick={() => onclick(item.id)} >Buy Now</Button>
                                    </Card.Body>
                                </Card>
                            </div>


                        </>
                    )
                })}
            </div>
        </>


    }
    return <>
        <div>
            <div>
                <div>
                    <h1 className={style.h1}><em>* Launch Letest Product * </em></h1>
                    <hr className={style.hr} />
                </div>
                <Showproduct />

            </div>


        </div>

    </>

}

export default Product;