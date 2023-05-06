import Link from 'next/link'
import React from 'react'
import Product from '@/models/Product';
import mongoose from "mongoose";
import connectDb from "@/middlewear/mongoose"


const Eyeglasses = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto text-center">
          <div className="flex flex-wrap -m-4 justify-center">
            {Object.keys(products).map((item) => {
              return <div key={item._id} passhref={"true"} className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md cursor-pointer">
                <a href={`/product/${products[item].slug}`} className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className=" object-cover object-center w-full h-full block" src={products[item].img} />
                </a>
                <div className="mt-4">
                  <h3 className="text-brown-100 text-xs tracking-widest title-font mb-1">{products[item].category}</h3>
                  <h2 className="text-black title-font text-lg font-medium">{products[item].title}</h2>
                  <p className="mt-1 text-brown-100 font-semibold">Rs.{products[item].price}</p>
                  <div className="mt-1 text-brown-100 font-semibold">
                    {products[item].size.includes('S') && <span className= " border border-gray-300 px-1 mx-1">S</span>}
                    {products[item].size.includes('M') && <span className= " border border-gray-300 px-1 mx-1">M</span>}
                    {products[item].size.includes('L') && <span className= " border border-gray-300 px-1 mx-1">L</span>}
                  </div>
                  <div className="mt-1">
                    {products[item].color.includes('black') && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[item].color.includes('brown') && <button className="border-2 border-gray-300 ml-1 bg-brown-100 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[item].color.includes('blue') && <button className="border-2 border-gray-300 ml-1 bg-blue-900 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[item].color.includes('red') && <button className="border-2 border-gray-300 ml-1 bg-red-900 rounded-full w-6 h-6 focus:outline-none"></button>}
                  </div>
                </div>


              </div>
            })}
          </div>
          </div>
      </section>
    </div>
  )
}
export async function getServerSideProps(context) {
  if (! mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let products = await Product.find({ category : "Eyeglasses"})
  let Eyeglasses = {}
  for (let item of products) {
    if (item.title in Eyeglasses) {
      if (!Eyeglasses[item.title].color.includes(item.color) && item.availableQty > 0) {
        Eyeglasses[item.title].color.push(item.color)
      }
      if (!Eyeglasses[item.title].size.includes(item.size) && item.availableQty > 0) {
        Eyeglasses[item.title].size.push(item.size)
      }

    }
    else {
      Eyeglasses[item.title] = JSON.parse(JSON.stringify(item))
      if (item.availableQty > 0) {
        Eyeglasses[item.title].color = [item.color]
        Eyeglasses[item.title].size = [item.size]


      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(Eyeglasses)) },
  }
}

export default Eyeglasses
