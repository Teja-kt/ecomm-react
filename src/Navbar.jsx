import React from 'react'
import "./Navbar.css"
import Cart from './Cart'
import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";


const Navbar = ({ content }) => {

    // const [items, setItems] = useState([])
    // function items(item){

    // }

  return (
    <div className='navbar'>
        <div>
            <h1>Store</h1>
        </div>
        <div className='search-tag'>
        <input type="search" placeholder='Search...' className='search-bar' />
        <p className='search-icon'>
        <IoSearchOutline size={30} />
        </p>
        </div>
        
        <IoCartOutline size={30} />

        {/* <Cart content={content}/> */}
    </div>
  )
}

export default Navbar