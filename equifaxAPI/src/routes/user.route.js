const { Router } = require('express');
const UserCtrl = require('../controllers/user.controller');

const router = Router();

/* Import Function Controller */
const { getUsers, newUser, deleteUser } = require('../controllers/user.controller');

// * ROUTES

/* Route get all users */
router.get('/getUsers', async(req, res) => {
   const data = await UserCtrl.getUsers();

   res.json(data);
});

/* Route create user */
router.post('/newUser', newUser);

/* Route delete user */
router.delete('/deleteUser/:id', deleteUser);

router.get('/test', (req, res) => {
    return res.json("test ok");
});


module.exports = router;