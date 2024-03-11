// import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'
import {getUsers,addUser,editUser,getUser,deleteUser} from '../models/usersDB.js'
// let SECRET_KEY='ieyn8y0894895t384gn0iergihetiugoeit04u5erg89gr30gjeroug0ue040gugugm-4ocgoe-orogf0u34ug34u0'


export default {

    getUsers: async (req,res)=>{
        try{
            res.send(await getUsers())
        }catch(err){
            console.error(err);
            res.json({
                msg: 'An error has occurred when retrieving the data.'
            }) 
        }
    },

    getUser :async(req,res)=>{
        try {
        res.send(await getUser(+req.params.id))
    }catch(err){
        console.log(err);
        res.json({
            msg: 'An error has occurred when retrieving the data.'
        })
    }
    },



    addUser : async(req,res)=>{
        const {firstName, lastName,email, gender ,age , userPass} = req.body;
        
        const post = await addUser(firstName, lastName,email, gender ,age , userPass)
        res.send(await getUsers())
    
},

deleteUser : async(req,res)=>{
    try{
    res.send(await deleteUser(+req.params.id))
    alert('user has been removed from the database')
}catch(err){
    console.log(err);
    res.json({
        msg: 'An error has occurred while removing the data.'
    })
}
},
 editUser : async(req,res)=>{
    const [user] = await getUser(+req.params.id)
    let {firstName, lastName,email, gender ,age , userPass} = req.body   
    firstName ? firstName = firstName: {firstName} = user
    lastName ? lastName = lastName: {lastName} = user
    email ? email = email: {email} = user
    gender ? gender = gender: {gender} = user
    age ? age = age: {age} = user
    userPass ? userPass = userPass: {userPass} = user
    await editUser(firstName, lastName,email, gender ,age , userPass, +req.params.id)
    res.json(await getUsers())
}

}