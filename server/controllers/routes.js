var userCntrl = require('./users');

module.exports.setup = function (router) {

    //routes for users
    router.post('/register',userCntrl.addUser);

    router.get('/users',userCntrl.getUsers);

    return router;

};