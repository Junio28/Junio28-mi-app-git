const User = require('../models/user');
async function getUsers(req, res) {
    try {
        const users = await User.findAll({
        });
        res.json({
            data: users
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Ah ocurrido un error interno'
        });
    }
};

module.exports = getUsers;