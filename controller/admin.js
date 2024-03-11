import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {getAdmins,addAdmin,getAdmin} from '../models/adminDB.js'
const SECRET_KEY='ieyn8y0894895t384gn0iergihetiugoeit04u5erg89gr30gjeroug0ue040gugugm-4ocgoe-orogf0u34ug34u0'

export default {
    getAdmins: async (req,res)=>{
        try{
            res.send(await getAdmins())
        }catch(err){
            console.error(err);
            res.json({
                msg: 'An error has occurred when retrieving the data.'
            })
        }
    },

    getAdmin :async(req,res)=>{
        try {
        res.send(await getAdmin(+req.params.id))
    }catch(err){
        console.log(err);
        res.json({
            msg: 'An error has occurred when retrieving the data.'
        })
    }
    },



    addAdmin : async(req,res)=>{
        const {email,userPass} = req.body;
        bcrypt.hash(userPass, 10,async(err,hash)=>{
            if (err) throw err
       await addAdmin (email,hash)

        const token = jwt.sign({ email, SECRET_KEY}, { expiresIn: '1h'});
        res.cookie('token', token, {httpOnly: true});
        res.send({
            msg: "Your account has been created successfully"
        })
    });
},

deleteAdmin : async(req,res)=>{
    try{
    res.send(await deleteAdmin(+req.params.id))
    alert('user has been removed from the database')
}catch(err){
    console.log(err);
    res.json({
        msg: 'An error has occurred while removing the data.'
    })
}
},



}