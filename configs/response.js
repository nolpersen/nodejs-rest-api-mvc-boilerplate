module.exports = {
    ok: async (message, data, res) => {
        const resp = {
            "status" : "ok",
            "message" : message,
            "data" : data
        }

        return res.json(resp)
    }
}