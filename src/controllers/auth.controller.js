const { generateToken } = require("../utils/jwt");

const login = (req, res) => {

    const { username } = req.body;

    if (!username) {

        return res.status(400).json({
            success: false,
            message: "Username is required"
        });

    }

    const payload = {
        username,
        role: "free"
    };

    const token = generateToken(payload);

    res.status(200).json({

        success: true,

        message: "Login successful",

        token

    });

};

module.exports = {
    login
};