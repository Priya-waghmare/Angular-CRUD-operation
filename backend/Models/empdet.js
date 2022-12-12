const mongoose= require('mongoose')

let empdetSchema= new mongoose.Schema({ 
   _id: mongoose.Schema.Types.ObjectId,
    id:Number,
    emp_nm:String,
    location:Object,
    CTC:Number, 
    exp:Number
})

module.exports= mongoose.model("empdetails",empdetSchema)
