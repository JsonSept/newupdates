import {getPosts,addPost,getPost,deletePost} from '../models/postDB.js'

export default {

    getPosts: async (req,res)=>{
        try{
            res.send(await getPosts())
        }catch(err){
            console.error(err);
            res.json({
                msg: 'An error has occurred when retrieving the data.'
            })
        }
    },

    getPost :async(req,res)=>{
        try {
        res.send(await getPost(+req.params.id))
    }catch(err){
        console.log(err);
        res.json({
            msg: 'An error has occurred when retrieving the data.'
        })
    }
    },



    addPost : async(req,res)=>{
        const {post_desc,post_comment,DatePosted,userID} = req.body
        const post = await addPost(post_desc,post_comment,DatePosted,userID)
        res.send(await getPost())
},

// addUser : async(req,res)=>{
//     const {firstName, lastName,email, gender ,age , userPass} = req.body;
//     bcrypt.hash(userPass, 10,async(err)=>{
//         if (err) throw err
//     const post = await addUser(firstName, lastName,email, gender ,age , userPass)
//     res.send(await getUsers())

//     const token = jwt.sign({ email, SECRET_KEY }, { expiresIn: '1h' });
//     res.cookie('token', token, {httpOnly: true});
//     res.send({
//         msg: "Your account has been created successfully"
//     })
// });

deletePost : async(req,res)=>{
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
//  editPost : async(req,res)=>{
//     const [user] = await getUser(+req.params.id)
//     let {} = req.body   
//     firstName ? firstName = firstName: {firstName} = user
//     lastName ? lastName = lastName: {lastName} = user
//     email ? email = email: {email} = user
//     gender ? gender = gender: {gender} = user
//     age ? age = age: {age} = user
//     userPass ? userPass = userPass: {userPass} = user
//     await editUser( +req.params.id)
//     res.json(await getPosts())
// }

}