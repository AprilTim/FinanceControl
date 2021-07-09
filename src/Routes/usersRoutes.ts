const userController = require('../Controllers/usersController');

const routes = [

    {
        method: 'GET',
        url: '/users',
        handler: userController.getAllUsers
    },
    {
        method: 'GET',
        url: '/user/:id',
        handler: userController.getUser,
    },
    {
        method: 'POST',
        url: '/user',
        handler: userController.addUser,
    }
]
module.exports = routes