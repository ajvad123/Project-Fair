const mongoose=require('mongoose')
const connectionString=process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("MongoDB Atlus Connection Successfully");
}).catch((err)=>{
    console.log("MongoDB Connection Failed!!");
    console.log(err);
})