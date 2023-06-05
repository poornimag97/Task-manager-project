const express=require("express")
const mongoose=require("mongoose")
const taskRouter=require("./routes/taskRoutes")
const {engine}=require("express-handlebars")
const methodOveride=require("method-override")
const app=express()
let PORT=5000

async function db(){
    await mongoose.connect("mongodb://127.0.0.1:27017")
    console.log("mongoDB connected");
}
db()
//inbuilt middleware
app.use(express.static("public"))

//to use the form data
//to get the body
app.use(express.urlencoded({extended:false}))
app.use(methodOveride("_method"))

//mount the template engine
app.engine("handlebars",engine())
app.set("view engine","handlebars")

//router-level-middleware
app.use("/task-manager",taskRouter)

app.listen(5000,(err)=>{
    if(err) throw err
    console.log(`server is running on ${PORT}`);
})