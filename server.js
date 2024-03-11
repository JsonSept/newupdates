import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'
import postRouter from '../backend/routes/post.js'
import usersRouter from '../backend/routes/users.js'
import adminRouter from '../backend/routes/admin.js'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'

import {auth} from '../backend/middleware/users.js'

config();


const PORT = process.env.PORT
const app = express()


app.use(cors())
app.use(express.json())

app.use(cookieParser())


// app.get('/users',(req,res)=>{
//     res.json(users)
// });

app.use('/users',usersRouter)
app.use('/post',postRouter)
app.use('/admin',adminRouter)

app.post('/login',auth , (req,res)=>{

})

app.listen(PORT, ()=>{
    console.log('http://localhost:'+ PORT);
})