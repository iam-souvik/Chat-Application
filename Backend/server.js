const express = require("express")
const dotenv =  require("dotenv")
// const {chats} = require("./data/data")
const ConnectDB = require("./config/db")
const  userRoutes  = require("./route/userRoutes")
const { notFound, errorHandler } = require("./middleware/errorMiddleware")


dotenv.config()
ConnectDB()
const app = express()

app.use(express.json())   // accept json data




app.get("/",(req,res)=>{

    res.send("Api Is Running")
})

app.use("/api/user",userRoutes)

app.use(notFound)       // This two are errorhandelar this is aptanal  You can use For finding error Easily
app.use(errorHandler)


// app.get("/api/chat",(req,res)=>{
//     res.send(chats);
// })

// app.get("/api/chat/:id",(req,res)=>{
//     const singleChat = chats.find((c)=> c._id == req.params.id)
//     res.send(singleChat)
// })



const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server start on http://localhost:${PORT}`)
})