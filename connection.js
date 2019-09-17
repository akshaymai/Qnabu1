const mongoose=require('mongoose')
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/PhoneBook',{useNewUrlParser:true}).then(()=>{

console.log('connect sucessfully....')
}).catch(()=>{

    console.log('not connected....')
})
module.exports={mongoose}