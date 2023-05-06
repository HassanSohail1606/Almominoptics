import React, { useState } from 'react'
import Link from 'next/link';
import {  AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';

const checkout = ({cart,subTotal,removeFromCart,addToCart}) => {
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [address, setAddress]= useState('');
    const [phone, setPhone]= useState('');
    const [city, setCity]= useState('');
    const [state, setState]= useState('');
    const [pincode, setPincode]= useState('');
    const [disabled, setDisabled]= useState(true);
    const handleChange = (e)=>{
    if(e.target.name =='name'){
        setName(e.target.value)
    }
    else if(e.target.name =='email'){
        setEmail(e.target.value)
    }
    else if(e.target.name =='address'){
        setAddress(e.target.value)
    }
    else if(e.target.name =='phone'){
        setPhone(e.target.value)
    }
    else if(e.target.name =='city'){
        setCity(e.target.value)
    }
    else if(e.target.name =='state'){
        setState(e.target.value)
    }
    else if(e.target.name =='pincode'){
        setPincode(e.target.value)
    }
    if(name.length>2 && email.length>2 && address.length>2 && phone.length>2 && city.length>2 && state.length>2 && pincode.length>2){
       setDisabled(false)
    }
    else{
        setDisabled(true)
    }

    }
     return (
        <div className='container px-2 sm:m-auto'>
            <h1 className='font-bold text-3xl my-4 text-center'>Checkout</h1>
            <h2 className='font-semibold text-xl'>1.Delivery Details</h2>
            <div className="mx-auto flex my-2">
                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input onChange={handleChange} value={name} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input onChange={handleChange} value={email} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>
            <div className="px-2 w-full">
                <div className=" mb-4">
                    <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                    <textarea onChange={handleChange} value={address} name="address" id="address" cols="30" rows="2" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" ></textarea>
                </div>
                <div className="mx-auto flex my-2">
                    <div className="px-2 w-1/2">
                        <div className=" mb-4">
                            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone Number</label>
                            <input onChange={handleChange} value={phone} type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="px-2 w-1/2">
                        <div className=" mb-4">
                            <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
                            <input onChange={handleChange} value={city} type="city" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                </div>
                <div className="mx-auto flex my-2">
                    <div className="px-2 w-1/2">
                        <div className=" mb-4">
                            <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                            <input onChange={handleChange} value={state} type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="px-2 w-1/2">
                        <div className=" mb-4">
                            <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
                            <input onChange={handleChange} value={pincode} type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    </div>
                    <h2 className='font-semibold text-xl'>2.Review Cart</h2>
                    <div className="sidecart bg-brown-100 p-6 m-2">
            <ol className='list-decimal text-black font-semibold'>
              {Object.keys(cart).length==0 && <div className='my-4'>Your cart is Empty</div>}
             {Object.keys(cart).map((k)=>{return<li key={k}>
                <div className="item flex my-5">
                  <div className='text-black w-2/3 font-semibold'>{cart[k].name}({cart[k].size}/{cart[k].variant})</div>
                  <div className='w-1/2 text-black flex font-semibold space-x-3'><AiOutlineMinusSquare onClick = {()=>{removeFromCart(k ,1,cart[k].prize,cart[k].name,cart[k].size,cart[k].variant)}}className='mx-3 my-1 text-xl cursor-pointer hover:text-white' />{cart[k].qty}<AiOutlinePlusSquare onClick = {()=>{addToCart(k ,1,cart[k].prize,cart[k].name,cart[k].size,cart[k].variant)}}className='mx-3 my-1 text-xl cursor-pointer hover:text-white' /></div>
                </div>
            
              </li>})}
            </ol>
            <span className="font-bold">SubTotal :{subTotal}</span>
          </div>
          <div className="mx-2">
          <Link href={"/checkout"}> <button disabled={disabled} className=" disabled:bg-slate-500 flex  mt-6 text-white hover:text-brown-100 bg-black border-0 py-2 px-6 focus:outline-none rounded text-sm">Pay Rs.{subTotal}</button></Link>
          </div>









            </div>
        </div>
    )
}

export default checkout
