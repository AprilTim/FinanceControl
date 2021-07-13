const userController = require('../Controllers/usersController');
const expenseController = require('../Controllers/expensesController');

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
    },
    {
        method: 'POST',
        url: '/login',
        handler: userController.login,
    },
    {
        method: 'POST',
        url: '/expense',
        handler: expenseController.addExpenses,
    },
    {
        method: 'DELETE',
        url: '/user',
        handler: userController.deleteUser,
    },
    {
        method: 'GET',
        url: '/expenses',
        handler: expenseController.getExpenses,
    }
]
module.exports = routes