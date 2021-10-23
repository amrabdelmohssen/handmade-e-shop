const Order = require('../models/Order')

exports.createOrder = async (req, res) => {

    console.log(req.body)
    try{
      const {
            user,
            orderItems,
            shippingAddressOne,
            shippingAddressTwo,
            city,
            zipCode,
            country,
            phone,
            status,
            totalPrice}=req.body
      const newOrder = new Order({
          user,
          orderItems,
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
    return res.status(500).json({error:error.message});
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

exports.getAllOrdersByPagenation = async(req,res)=>{
  try{

      const {page = 1  , limit = 20} = req.query;
       const order = await Order.find({})
                                .limit(limit*1)
                                .skip((page - 1) * limit)
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
        const {
          user,
          orderItems,
          shippingAddressOne,
          shippingAddressTwo,
          city,
          zipCode,
          country,
          phone,
          status,
          totalPrice}=req.body               


          const orderUpdate= await Order.findByIdAndUpdate(req.params.id,{
            user,
            orderItems,
            shippingAddressOne,
            shippingAddressTwo,
            city,
            zipCode,
            country,
            phone,
            status,
            totalPrice,
          }
          ,{new:true})

          if(!orderUpdate){
            return res.status(404).send();
          }
          res.status(200).send(orderUpdate);
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


