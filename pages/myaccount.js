import React, { useEffect,useState } from 'react'



const myaccount = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('myuser'))
    if (user && user.token){
    setUser(user)
    setEmail(user.email)
    }
  },[])

  
  return (
    <div className='container mx-auto my-9 '>
     <h1 className="text-3xl font-bold text-center">Update Your Account</h1>
            <h2 className='font-semibold text-xl'>1.Delivery Details</h2>
            <div className="mx-auto flex my-2">
                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>
            <div className="px-2 w-full">
                <div className=" mb-4">
                    <label htmlFor="Address" className="leading-7 text-sm text-gray-600">Address</label>
                    <textarea name="Address" id="Address" cols="30" rows="2" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" ></textarea>
                </div>
                <div className="mx-auto flex my-2">
                    <div className="px-2 w-1/2">
                        <div className=" mb-4">
                            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone Number</label>
                            <input type="phone" id="name" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="px-2 w-1/2">
                        <div className=" mb-4">
                            <label htmlFor="City" className="leading-7 text-sm text-gray-600">City</label>
                            <input type="text" id="City" name="City" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                </div>
                <div className="mx-auto flex my-2">
                    <div className="px-2 w-1/2">
                        <div className=" mb-4">
                            <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                            <input type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="px-2 w-1/2">
                        <div className=" mb-4">
                            <label htmlFor="Pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
                            <input type="text" id="Pincode" name="Pincode" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    </div>
                    </div>
    </div>
  )
}

export default myaccount
