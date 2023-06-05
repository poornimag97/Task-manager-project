const express=require("express")
const {getTasks,postTask,getTask, updateTask, deleteTask}=require("../controllers/taskController")
let taskRouter=express.Router()

//route to create task
taskRouter.get("/task",getTasks)

//route to post task
taskRouter.post("/task",postTask)

//get one task to update
taskRouter.get("/task/:id",getTask)

//update one task
taskRouter.put("/task/:id",updateTask)

//delete one task
taskRouter.delete("/task/:id",deleteTask)



module.exports=taskRouter;


//http:localhost:5000/task-manager/task