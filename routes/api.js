const experess = require('express');
const userController = require('../src/controllers/userController');

const router = experess.Router();

//users
router.get('/users', userController.index);
router.get('/user/:id', userController.show);
router.post('/user/store', userController.store);
router.put('/user/update/:id', userController.update);
router.delete('/user/delete/:id', userController.delete);

module.exports = router;