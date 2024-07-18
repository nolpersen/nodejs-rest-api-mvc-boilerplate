module.exports = {
    ok: async (message, data, res) => {
        const resp = {
            "status" : "ok",
            "message" : message,
            "data" : data
        }

        return res.json(resp)
    },
    error: async (message, data, res) => {
        const resp = {
            "status" : "error",
            "message" : message,
            "data" : data
        }

        return res.json(resp)
    }
}