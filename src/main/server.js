const express = require('express');
const app = express();
const Routes = require('./app/routes/index');
const { RequestResponseLogger, ErrorHandler, Cache } = require('./app/middlewares/index');

app.get('', (req, res) => {
    res.send({
        name: 'Free Roam',
        status: 100
    });
});

app.get('/health', (req, res) => {
    res.send("100")
});

app.use('/api/v1/', Cache.process, RequestResponseLogger.log, ErrorHandler.process, Routes);

app.get('*', (req, res) => {
    res.send("404")
});

const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
    console.log('Server is up on port ' + port +'.')
});