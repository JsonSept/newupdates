import mysql from 'mysql2'
import {config} from 'dotenv'
import {pool} from '../config/config.js'
config()




const getUsers = async()=>{
    const[result] = await pool.query(`
    SELECT * FROM
    users
    `)
    return result
}

const getUser = async(id) =>{
    const [result] = await pool.query(`
    SELECT *
    FROM users
    WHERE id = ?
    `,[id])
    return result
}
const deleteUser = async(id) => { // pool helps connect to the database
    const [result] = await pool.query(` 
        DELETE FROM users WHERE (id) = (?)
    `,[id])
    return result
}

const editUser = async(firstName, lastName,email, gender ,age , userPass)=>{
    const [user] = await pool.query(`
        UPDATE users
        SET firstName=?,lastName=?,email=?,gender=?,age=?,userPass=?
        WHERE (id=?)
    `,[firstName, lastName,email, gender ,age , userPass])
    return user
}
const addUser = async(firstName, lastName,email, gender ,age , userPass)=>{
    await pool.query(`
    INSERT INTO users (firstName, lastName,email, gender ,age , userPass) VALUES (?,?,?,?,?,?)
    `,[firstName, lastName,email, gender ,age , userPass])
}

const checkUser = async (email) => {
    const [[{userPass}]] = await pool.query(`
    SELECT userPass FROM users WHERE email = ?
    `,[email])
    return userPass
}


export {getUsers,getUser,deleteUser,editUser,addUser,checkUser}