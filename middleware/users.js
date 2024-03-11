import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'


const auth = async (req,res,next) => { 
    const {email, userPass} = req.body
    const hashedPassword = await checkUser(email)
    bcrypt.compare(userPass,hashedPassword, (err,result)=>{
        if(err) throw err
        if(result === true){
            const {email} = req.body
        const token = jwt.sign({email:email},
        process.env.SECRET_KEY,{expiresIn:'1h'})
        res.cookie('jwt',token,{httpOnly:false})
        res.send({
            token:token,
            msg:'You are logged in'
        })
        // next()
        }else{
            res.send({msg:'The username or password is incorrect'})
        }
    })
    }

    export {auth}