const { RegisterClient, RegisterUser } = require('../controllers/index');
const express = require('express');
const router = express.Router();

router.get("/register/user", async (request, response) => {
    let result = await RegisterUser.process(request);
    response.body = result;
});

module.exports = router;