const experess = require("express");
const apiRoutes = require('./routes/api');
const db = require('./configs/db');

const app = experess();
const PORT = 3000;

app.use(experess.json())
app.use('/api', apiRoutes);

db.sync({force:false})
    .then(() => {
        app.listen(PORT, console.log('Server is running on port: ' + PORT))
    })

