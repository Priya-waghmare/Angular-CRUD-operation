const express=require('express')
const app=express()
const mongoose=require('mongoose')
const bodyparser = require('body-parser')
const jsonparser = bodyparser.json()
const cors=require('cors')
app.use(cors())

mongoose.connect('mongodb+srv://priya:1234@cluster0.pedotg2.mongodb.net/Employee?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
    
}).then(
    ()=>{console.log('mongodb atlas connected')}
)


const empdet = require('./Models/empdet.js')


//app.get to read the data
app.get('/empdetails',(req,res)=>{
    empdet.find({}).then(
        (data)=>{ res.json(data);}
    )
})


//app.post to add new data
app.post('/addempl',jsonparser,(req,res)=>{
        const newemp= new empdet({
            _id: new mongoose.Types.ObjectId(),
            id: req.body.id,
            emp_nm: req.body.emp_nm,
            location:{
                city:req.body.city,
                state:req.body.state
            },
            CTC: req.body.CTC,
            exp: req.body.exp,
    })
    newemp.save().then((msg)=>{res.json(msg)}).catch(
        (err)=>{console.log(err)}
    )
})


//delete data//
app.delete('/delemp/:id',(req,res)=>{
    empdet.deleteOne(
        {_id:req.params.id}).then((info)=>{res.json(info)}).catch((err)=>{res.json(err)})
})


//Update Data//
app.put('/updatempdet/:id',jsonparser,(req,res)=>{
    empdet.updateOne({_id:req.params.id},
        { $set:{ 
            id:req.body.id,
            emp_nm:req.body.emp_nm,
            location:{city:req.body.city,
                state:req.body.state},
            CTC:req.body.CTC, 
            exp:req.body.exp}

        }).then((info)=>{res.json(info)}).catch((err)=>{res.json(err)})
})




app.listen(3100,()=>{console.log('Server Running on 3100')})