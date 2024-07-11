import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from '../Views/CSS/ProductDetail.module.css'
import {useDispatch} from "react-redux"
import {addCart} from "./Redux/Action/Action"

function ProductInfo() {
  const [data, setdata] = useState({})
  const { id } = useParams()
 
const dispatch = useDispatch()
const addproduct=(data)=>{
  dispatch(addCart(data))

}
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      setdata(await response.json())
    }
    getProduct();
  }, [])

  return (
    <>
      <div>
        <ul className={style.PNGs}>
          <li><img src="https://freesvg.org/img/1534129544.png" alt="" width={'15px'} /> Gmail </li>
          <li><img src="https://static.vecteezy.com/system/resources/previews/023/986/704/non_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png" alt="" width={'15px'} /> You Tube </li>
          <li><img src="https://cdn.vox-cdn.com/thumbor/KqYnd6YgxZ6yJvyBCk-heGXYEMM=/0x0:1280x800/1400x1400/filters:focal(640x400:641x401)/cdn.vox-cdn.com/uploads/chorus_asset/file/19700731/googlemaps.png" alt="" width={'15px'} /> Maps </li>
        </ul>
        <hr />

      </div>
      <div className={style.All}>



        <div>
          <img className={style.image} src={data.image} height="100px" width="100px" />

        </div>
        <div>
          <h1 className={style.category}>{data.category}</h1>
          <h2 className={style.Title}>{data.title}</h2>
          <h3 className={style.rating}> Ratings {data.rating && data.rating.rate}<img src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" alt="" width={'15px'} /> </h3> <br />
          <h5 className={style.price}> $ {data.price} </h5>
            <div>
          <p className={style.description}><em><b>{data.description}</b></em></p>
          </div>
          <div>
            <button onClick={()=>addproduct(data)} className={style.btn2}>Add To Cart</button>
            {"  "}
            <button className={style.btn1}>Go To Cart</button>

          </div>

          
        </div>

      </div>


    </>
  )
}


export default ProductInfo