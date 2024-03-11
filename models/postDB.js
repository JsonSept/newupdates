import mysql from 'mysql2'
import {config} from 'dotenv'
import {pool} from '../config/config.js'
config()

const getPosts = async()=>{
    const[result] = await pool.query(`
    SELECT * FROM
    posts
    `)
    return result
}

const getPost = async(postID) =>{
    const [result] = await pool.query(`
    SELECT *
    FROM posts
    WHERE postID = ?
    `,[postID])
    return result
}
const deletePost = async(id) => { // pool helps connect to the database
    const [result] = await pool.query(` 
        DELETE FROM posts WHERE (id) = (?)
    `,[id])
    return result
}


const addPost = async(post_desc,post_comment,DatePosted,userID)=>{
    await pool.query(`
    INSERT INTO posts (post_desc,post_comment,DatePosted,userID) VALUES (?,?,?,?)
    `,[post_desc,post_comment,DatePosted,userID])
}



export {getPost,getPosts,deletePost,addPost}
