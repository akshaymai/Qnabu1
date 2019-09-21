const mongoose=require('mongoose')
mongoose.Promise=global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
 
mongoose.connect('mongodb://localhost:27017/PhoneBook',{useUnifiedTopology: true,useNewUrlParser:true}).then(()=>{

console.log('connect sucessfully....')
}).catch(()=>{

    console.log('not connected....')
})
module.exports={mongoose}