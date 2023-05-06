
import Product from "@/models/Product"
import connectDb from "@/middlewear/mongoose"


 const handler = async  (req, res) => {
   let products =   await Product.find();
    let Eyeglasses={}
    for(let item of products){
        if(item.title in Eyeglasses){
              if(!Eyeglasses[item.title].color.includes(item.color) && item.availableQty > 0 ){
              Eyeglasses[item.title].color.push(item.color)
              }
              if(!Eyeglasses[item.title].size.includes(item.size) && item.availableQty > 0 ){
                Eyeglasses[item.title].size.push(item.size)
                }

        }
        else{
            Eyeglasses[item.title] = JSON.parse(JSON.stringify(item))
            if(item.availableQty > 0){
              Eyeglasses[item.title].color=[item.color]
              Eyeglasses[item.title].size=[item.size]


            }
        }
    } 
    res.status(200).json({Eyeglasses});
  }
  
  export default connectDb(handler);