const express=require('express')
const verifyToken=require('../middleware/jwt')
const {getUserList,login,updatePassword,regulize}=require('../Controller/login_user')
const router=express.Router()
router.get('/',getUserList)
router.post('/', login);
router.put('/updatePassword', updatePassword);
router.put('/:id',regulize)

router.get('/protected',verifyToken,(req, res) => {
    res.json({ message: 'Authorized' });
});


module.exports=router
