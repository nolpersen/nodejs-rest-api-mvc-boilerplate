const User = require('../models/user');

module.exports = {
    index: async (req, res) => {

        const users = await User.findAll({
            limit: 10,
            order:[
                ['created_at', 'DESC']
            ],
            // attributes: { exclude: ['password'] }
        });
        const response = {
            'status' : "ok",
            'message' : "List User",
            'data' : users
        }
        res.json(response);
    },

    store: (req, res) => {
        const response = {
            'status' : "ok",
            'message' : "Store User"
        }
        res.json(response);
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