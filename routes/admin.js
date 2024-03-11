import express from 'express'
import controller from '../controller/admin.js'
const router = express.Router()

router
    .route('/')
            .get(controller.getAdmins)
            .post(controller.addAdmin)
         

router
    .route('/:id')
            .delete(controller.deleteAdmin )
            // .patch(controller.editAdmin)
            .get(controller.getAdmin)

export default router