import React, { useRef, useState } from 'react'
import Link from 'next/link';
import { AiOutlineShoppingCart, AiFillCloseSquare, AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/Md';


const Navbar = ({ logout, user, cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  // console.log( cart, addToCart , removeFromCart , clearCart , subTotal)
  const [dropdown,setDropdown]= useState(false)

  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }
  const ref = useRef()

  return (
    <div className="text-gray-600 font-bold text-xl shadow-md top-0 bg-white z-10" >
     <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/" className="flex items-center">
          <img src="/sidelogo.png" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center text-xl whitespace-nowrap font-extrabold text-black hover:text-brown-100">Al Momin Optics</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center md:text-base justify-center">
          <Link href={'/Eyeglasses'} className="mr-5 md:mr-10 text-black font-bold hover:text-brown-100">EyeGlasses</Link>
          <Link href={'/Sunglasses'} className="mr-5 md:mr-10 text-black font-bold hover:text-brown-100">SunGlasses</Link>
          <Link href={'/Lenses'} className="mr-5 md:mr-10 text-black font-bold hover:text-brown-100">Lenses</Link>
          <Link href={'/Contactlenses'} className="mr-5 md:mr-10 text-black font-bold hover:text-brown-100">Contact Lenses</Link>
          <Link href={'/BrandedEyewear'} className="mr-5 md:mr-10 text-black font-bold hover:text-brown-100">Branded Eyewear</Link>
        </nav>
        <div className="cart absolute right-2 mx-5 bold text-md cursor-pointer flex">
          <span onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}}>
        {dropdown && <div onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}} className="absolute right-8 bg-brown-100 top-6 rounded-md px-5 py-2 w-32 text-black">
          <ul>
            <Link href={'/myaccount'}><li className='py-1 text-sm hover:text-white'>My Account</li></Link>
            <Link href={'/Orders'}><li className='py-1 text-sm hover:text-white'>Orders</li></Link>
            <li onClick={logout} className='py-1 text-sm hover:text-white'>Log Out</li>
          </ul>
        </div>}
        {user.value && <MdAccountCircle  className='text-2xl mx-2 text-black hover:text-brown-100' />}
        </span>
        {!user.value && <Link href={'/login'}>
            <button className='bg-brown-100 text-sm px-2 py-1 mx-2  text-black hover:text-white rounded-md font-semibold'>Login</button>
          </Link> }
          <a><AiOutlineShoppingCart onClick={toggleCart} className='text-2xl text-black hover:text-brown-100 ' /></a>
        </div>
      
        <div ref={ref} className={`sidecart w-72 h-[100vh] absolute top-0 right-0 bg-brown-100 py-10 px-6 transform transition-transform ${Object.keys(cart).length !== 0 ? `translate-x-0` : `translate-x-full`}`}>
          <h2 className='font-bold text-xl text-black text-center'>Shopping Cart</h2>
          <span onClick={toggleCart} className="absolute top-3 right-3 text-black hover:text-white text-2xl cursor-pointer"><AiFillCloseSquare /></span>
          <ol className='list-decimal text-black font-semibold'>
            {Object.keys(cart).length == 0 && <div className='my-4'>Your cart is Empty</div>}
            {Object.keys(cart).map((k) => {
              return <li key={k}>
                <div className="item flex my-5">
                  <div className='text-black w-2/3 font-semibold'>{cart[k].name}({cart[k].size}/{cart[k].variant})</div>
                  <div className='w-1/2 text-black flex font-semibold space-x-3'><AiOutlineMinusSquare onClick={() => { removeFromCart(k, 1, cart[k].prize, cart[k].name, cart[k].size, cart[k].variant) }} className='mx-3 my-1 text-xl cursor-pointer hover:text-white' />{cart[k].qty}<AiOutlinePlusSquare onClick={() => { addToCart(k, 1, cart[k].prize, cart[k].name, cart[k].size, cart[k].variant) }} className='mx-3 my-1 text-xl cursor-pointer hover:text-white' /></div>
                </div>
              </li>
            })}
            <span className="font-bold">SubTotal :{subTotal}</span>
            <div className="flex">
              <Link href={"/checkout"}><button className="flex mx-auto mt-6 text-white hover:text-brown-100 bg-black border-0 py-2 px-6 focus:outline-none rounded text-sm">Checkout</button></Link>
              <button onClick={clearCart} className="flex mx-auto mt-6 text-white hover:text-brown-100 bg-black border-0 py-2 px-6 focus:outline-none rounded text-sm">Clear Cart</button>
            </div>
          </ol>
        </div>
      </div>


    </div>

  )
}

export default Navbar
