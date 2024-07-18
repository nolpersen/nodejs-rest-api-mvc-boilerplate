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

        const data = await User.findOne({
            id : user.id
        })

        response.ok("New User Created", data, res);
    },

    update: (req, res) => {
        const response = {
            'status' : "ok",
            'message' : "Update User"
        }
        res.json(response);
    },

    show: (req, res) => {
        
        const response = {
            'status' : "ok",
            'message' : "Show id: " + req.params.id
        }
        res.json(response);
    }, 

    delete: (req, res) => {
        const response = {
            'status' : "ok",
            'message' : "Delete"
        }
        res.json(response);
    }


}