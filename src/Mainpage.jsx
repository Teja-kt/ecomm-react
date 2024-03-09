import React, { useEffect, useState } from 'react'
import "./Mainpage.css"

const Mainpage = ({onUpdateContent}) => {
    const [cartItems, setCartItems] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        showItems()
    },[])

    const url = "https://fakestoreapi.com/products"
    const showItems = async () => {
        try {
            const response = await fetch(url)
            const dataFetched = await response.json()
            setData(dataFetched)
        } catch (error) {
            console.log(error);
        }
    }

    const addToCart = (cartItem) => {
        setCartItems((prevCart) => [...prevCart, cartItem])
        console.log(cartItems);
        onUpdateContent(cartItems)
    }


  return (

    <div onLoad={showItems}>
        <div className='allItems'>
            {data.map((card) => (
                <div key={card.id} className='products'>
                    <img src={card.image} className='im' alt='im'/>
                    <h4 className='title'>{card.title}</h4>
                    <p>Price : {card.price}</p>
                    <button className='btns' onClick={() => {addToCart(card)}}>Add</button>
                </div>               
            ))}
        </div>
    </div>
  )
}

export default Mainpage