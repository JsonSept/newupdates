import mysql from 'mysql2'
import {config} from 'dotenv'
import {pool} from '../config/config.js'
config()




const getAdmins = async()=>{
    const[result] = await pool.query(`
    SELECT * FROM
    admin
    `)
    return result
}

const getAdmin = async(id) =>{
    const [result] = await pool.query(`
    SELECT *
    FROM admin
    WHERE id = ?
    `,[id])
    return result
}
const deleteUser = async(id) => { // pool helps connect to the database
    const [result] = await pool.query(` 
        DELETE FROM admin WHERE (id) = (?)
    `,[id])
    return result
}

// const editUser = async(firstName, lastName,email, gender ,age , userPass)=>{
//     const [user] = await pool.query(`
//         UPDATE admin
//         SET firstName=?,lastName=?,email=?,gender=?,age=?,userPass=?
//         WHERE (id=?)
//     `,[firstName, lastName,email, gender ,age , userPass])
//     return user
// }
const addAdmin = async(email,userPass)=>{
    await pool.query(`
    INSERT INTO admin (email,userPass) VALUES (?,?)
    `,[email,userPass])
}

const checkAdmin = async (email) => {
    const [[{userPass}]] = await pool.query(`
    SELECT userPass FROM admin WHERE email = ?
    `,[email])
    return userPass
}


export {getAdmins,getAdmin,deleteUser,addAdmin,checkAdmin}