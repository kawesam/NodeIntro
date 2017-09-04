var userCntrl = require('./users');

module.exports.setup = function (router) {

    //authentication route
    router.post('/users/authenticate',userCntrl.authentiateUser);

    //routes for users
    router.post('/register',userCntrl.addUser);

    router.use(userCntrl.verifyUser);

    router.get('/users',userCntrl.getUsers);

    router.get('/users/delete/:id',userCntrl.deleteUser);

    return router;

};