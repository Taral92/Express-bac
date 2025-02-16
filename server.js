const express =require('express')
require('dotenv').config()
const app=express()
app.use(express.json())
app.get('/',(req,res)=>{
    res.json({messgae:'aey fuck off'})

})
const teadata=[]

teadata.push({id:"1",price:"1000",name:'ice-tea'},{
    id:'2',price:'2000',name:'green-tea'
})
console.log(teadata);

let nextid=1
app.post('/teas',(req,res)=>{
     const {name,price}=req.body
     const newtea= {id:nextid++,price,name}
     teadata.push(newtea)
     res.send(teadata)
})
app.get('/teas/:id',(req,res)=>{
      const {id} = req.params;
        const x=teadata.find(x=> x.id===id  )  
        if(!x) return res.send('not find any product by this id')
            res.send(x)  

})
app.put('/teas/:id',(req,res)=>{

    const{id}= req.params;
   const y =  teadata.find(x=> x.id===id)
   if(!y) return res.send('no product')

   const {name,price}= req.body;
   y.name = name
   y.price=price
   res.send(y)

   

})
app.delete('/teas/:id',(req,res)=>{
  const xx=  teadata.findIndex(t=> t.id=== req.params.id)
  if(xx===-1) return res.send('not found')
  teadata.splice(xx,1)
  res.send('deleted')


})
const port=process.env.PORT
app.listen(port,()=>{
    console.log(`server is running on this ${port}`);
    
})