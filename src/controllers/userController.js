const User = require('../models/user');
const response = require('../../configs/response')
const bcrypt = require('bcryptjs');
const moment = require('moment');
moment().format();

module.exports = {
    index: async (req, res) => {

        const users = await User.findAll({
            limit: 10,
            order:[
                ['created_at', 'DESC']
            ],
            // attributes: { exclude: ['password'] }
        });
       
        response.ok("List User", users, res);
    },

    store: async (req, res) => {
        
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        const user = await User.create({
            'name':name,
            'email':email,
            'password': bcrypt.hashSync(password, 8),
            'created_at': moment.now(),
            'updated_at': moment.now()
        })

        const data = await User.findByPk(user.id)

        response.ok("New User Created", data, res);
    },

    update: async (req, res) => {
        const id = req.params.id;
        const name = req.body.name;

        await User.update(
            { name: name },
            {
                where: {
                    id: id,
                },
            },
        );

        const user = await User.findByPk(id);

        response.ok("User Updated", user, res);
    },

    show: async (req, res) => {
        
        const id = req.params.id;

        const user = await User.findByPk(id);

        response.ok("User Found", user, res);
    }, 

    delete: async (req, res) => {
        const id = req.params.id;
        
        await User.destroy({
            where: {
                id:id
            }
        })

        response.ok("User Deleted", null, res);
    }


}