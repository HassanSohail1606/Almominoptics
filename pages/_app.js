
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import LoadingBar from 'react-top-loading-bar'
import '@/styles/globals.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'




export default function App({ Component, pageProps }) {
  const [cart,setCart]= useState({})
  const [subTotal,setsubTotal]= useState(0)
  const [user, setUser]= useState({value : null})
  const [key, setkey]= useState()
  const [progress, setProgress] = useState(0)
  const router = useRouter()
  useEffect(()=>{
    router.events.on('routeChangeStart' ,()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete' ,()=>{
      setProgress(100)
    })
   console.log("hey i am useeffect")
   try {
    if (localStorage.getItem("cart")){
      setCart(JSON.parse(localStorage.getItem("cart")))
      saveCart(JSON.parse(localStorage.getItem("cart")))
     }
   } catch (error) {
    console.error("error");
    localStorage.clear()
    }
    const token = localStorage.getItem('token')
    if(token){
    setUser({value : token})
    }
    setkey(Math.random())
       },[router.query])
   
   const logout = ()=>{
   localStorage.removeItem('token')
   setUser({value: null})
   setkey(Math.random())
   router.push('/')
   }
   const saveCart = (myCart) => {
     localStorage.setItem("cart", JSON.stringify(myCart))
     let subt= 0;
     let keys= Object.keys(myCart)
     for (let i=0; i<keys.length; i++){
      subt += myCart[keys[i]].prize*myCart[keys[i]].qty;
     }
     setsubTotal(subt)
   }
   const addToCart =(itemCode, qty , prize, name, size, variant) =>{
    let newCart= JSON.parse(JSON.stringify(cart));
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else{
      newCart[itemCode] = {qty: 1 ,prize, name, size, variant}
   }
     setCart(newCart)
     saveCart(newCart)
   }

   const buyNow=(itemCode, qty , prize, name, size, variant)=>{
    
    let newCart= {itemCode: {qty: 1 ,prize, name, size, variant}};
     setCart(newCart)
     saveCart(newCart)
     router.push('/checkout')
}


     const clearCart=()=>{
      setCart({})
      saveCart({})
     }
     const removeFromCart =(itemCode, qty , prize, name, size, variant) =>{
      let newCart= cart;
      if(itemCode in cart){
        newCart[itemCode].qty = cart[itemCode].qty - qty
      }
      if(newCart[itemCode]["qty"]<=0){
        delete newCart[itemCode]
      }
       setCart(newCart)
       saveCart(newCart)
     }







  return <>
    <LoadingBar
        color='#f11946'
        progress={progress}
        waitingTime={500}
        onLoaderFinished={() => setProgress(0)}
    />
    {key &&<Navbar logout={logout} user={user} key={key} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />}
    <Component buyNow={buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}{...pageProps} />
    <Footer />
  </>
}
