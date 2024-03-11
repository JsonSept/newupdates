import express from 'express'
import controller from '../controller/post.js'
const router = express.Router()

router
    .route('/')
            .get(controller.getPosts)
            .post(controller.addPost)
         

router
    .route('/:id')
            .delete(controller.deletePost )
            // .patch(controller.editPost)
            .get(controller.getPost)

export default router