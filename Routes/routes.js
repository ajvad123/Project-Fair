

const express=require('express')
const userController=require('../Controllers/userController')
const projectController=require('../Controllers/projectController')
const router=express.Router()
const jwtMiddle=require('../Middlewares/jwtMiddleware')
const multerConfig=require('../Middlewares/multerMiddleware')


router.post('/register',userController.userRegister)
router.post('/login',userController.userLogin)
router.post('/addproject',jwtMiddle,multerConfig.single('image'),projectController.addProjects)
router.get('/home-Projects',projectController.homeProjects)
router.get('/all-Projects',jwtMiddle,projectController.allProjects)
router.get('/user-Projects',jwtMiddle,projectController.userProjects)
router.put('/edit-project/:pid',jwtMiddle,multerConfig.single('image'),projectController.editProject)
router.delete('/delete-Project/:pid',jwtMiddle,projectController.removeProject)






module.exports=router