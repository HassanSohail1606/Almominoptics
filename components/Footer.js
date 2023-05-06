import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="text-brown-100 body-font">
        <div className="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-black">
              <img src="/sidelogo.png" alt="" />
              {/* <div className=" text-xl">Al Momin Optics</div> */}
            </a>
            <b><div className="text-2xl text-black mx-8 ">Al Momin Optics</div></b>
            <div className=" text-brown-100 mx-12 ">The Name Of Quality</div>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h3 className="text-black font-bold tracking-widest text-md mb-3">Quick Links</h3>
              <nav className="list-none mb-10">
                <li>
                  <a href={'/Eyeglasses'} className="text-brown-100 hover:text-black">EyeGlasses</a>
                </li>
                <li>
                  <a href={'/Sunglasses'} className="text-brown-100 hover:text-black">SunGlasses</a>
                </li>
                <li>
                  <a href={'/Lenses'} className="text-brown-100 hover:text-black">Lenses</a>
                </li>
                <li>
                  <a href={'/Contactlenses'} className="text-brown-100 hover:text-black">Contact Lenses</a>
                </li>
                <li>
                  <a href={'/BrandedEyewear'} className="text-brown-100 hover:text-black">Branded Eyewear</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className= "text-black font-bold tracking-widest text-md mb-3">About Us</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-brown-100 hover:text-black">First Link</a>
                </li>
                <li>
                  <a className="text-brown-100 hover:text-black">Second Link</a>
                </li>
                <li>
                  <a className="text-brown-100 hover:text-black">Third Link</a>
                </li>
                <li>
                  <a className="text-brown-100 hover:text-black">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="text-black font-bold tracking-widest text-md mb-3">Contact Us</h2>
              <nav className="list-none mb-10">
                <p><b>Mobile</b>: 03482963936</p>
                <p className='py-4'><b>Email</b>: almominoptics86@gmail.com</p>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="text-black font-bold tracking-widest text-md mb-3">Visit Us</h2>
              <nav className="list-none mb-10">
            <p><b>Address</b>: Shop #03 Plot #R-651 Sector 11C-1 Sir-Syed Town North Karachi, Karachi Pakistan</p>
         
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white text-sm text-center sm:text-left">© 2023 Al Momin Optics —
              <a rel="noopener noreferrer" className="text-brown-100 ml-1" target="_blank">@The Name Of Quality</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-white hover:text-brown-100 cursor-pointer">
                <svg fill="currentColor" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white hover:text-brown-100 cursor-pointer">
                <svg fill="currentColor" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white hover:text-brown-100 cursor-pointer">
                <svg fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-white hover:text-brown-100 cursor-pointer">
                <svg fill="currentColor" stroke="currentColor" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
