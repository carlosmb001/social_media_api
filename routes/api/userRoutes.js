const router = require('express').Router();

const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// /api/users GET all and POST 
router.route('/').get(getUser).post(createUser);

// /api/users/:userId GET one user, PUT and DELETE by user's ID
router.route('/:_id')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

// /api/users/:userId/friends/:friendId POST and DELETE a friend by ID
router.route('/:_id/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

module.exports = router;
