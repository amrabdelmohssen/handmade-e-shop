const Order = require('../models/Order')

exports.createOrder =async (req, res) => {

    console.log(req.body)
    try{
      const {shippingAddressOne,
            shippingAddressTwo,
            city,
            zipCode,
            country,
            phone,
            status,
            totalPrice}=req.body
      const newOrder = new Order({
         shippingAddressOne,
         shippingAddressTwo,
         city,
         zipCode,
         country,
         phone,
         status,
         totalPrice,
      });
      const order = await newOrder.save()
      if(!order){
          throw new Error("order can not be created")
      }
      return res.status(201).json(order)
    }catch(error){
    return  res.status(500).json({error:error.message});
    }
  }
  

exports.getAllOrders = async(req,res)=>{
    try{
         const order = await Order.find({})
        return res.status(200).json(order)

    }catch(error){

        return res.status(500).json(error.message)

    }
}


exports.getOneOrder = async (req, res) => {
    try{
        const oneOrder = await Order.findOne({_id:req.params.id});
        return res.status(200).json(oneOrder);
      }catch(error){
        return res.status(500).json(error.message);
      }
  };
  


exports.updateOrder= async (req,res)=>{
  
    try{
        Order.findByIdAndUpdate(req.params.id,{ 
            city:req.body.city,
            
           },{new:true})

        const orderUpdated= await newname.save()
        return res.status(200).json(orderUpdated)
      }
      catch(error){
      return  res.status(500).json({error:error.message});
      }
};

exports.deleteOrder = async(req, res) => {
    try{
        const deleteOrder = await Order.findByIdAndRemove(req.params.id);
        return res.status(200).json(deleteOrder);
      }catch(error){
        return res.status(500).json(error.message);
      }
}; 


