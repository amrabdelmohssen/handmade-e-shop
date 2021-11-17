const express = require('express');
const userController = require('../controllers/userController.js');
const authController = require('../controllers/authController.js');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetpassword/:token', authController.resetPassword);

//Protect all  routes after this middleware
router.use(authController.protect);

router.patch('/updateMyPassword', authController.updatePassword);
router.get('/me', userController.getMe, userController.getUser);
router.patch(
  '/updateMe',
  userController.updateMe
);
router.delete('/deleteMe', userController.deleteMe);

//restrict next routes to Admin only
router.use(authController.restrictTo(true));

router.route('/').get(userController.getAllUsers)
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

router.get('/get/count',userController.getUsersCount)

module.exports = router;
