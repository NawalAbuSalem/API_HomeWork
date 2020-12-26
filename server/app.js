const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

//write your code 
app.get('/user',(req,res)=>{
    res.json({message:'Hello '+req.query.name});
    
})
app.post('/user',(req,res)=>{
    res.json({message:'Hello',name:req.body.name}); 
    
})
 
app.listen(3000,()=>{
   console.log('server running on port 3000'); 
});


