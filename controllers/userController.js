const {User} = require('../model/userModel');

const registerUser = async (req, res) => {
    try {
        const { username, password, firstname, lastname } = req.body;
        console.log(username);
        console.log(password);
        console.log(firstname);
        console.log(lastname);

        const existingUser = await User.findOne({ username });
        if (existingUser) {
        return res.status(411).json({
            message: "Email already taken"
        });
    }

        // Use User.create() directly
        const newUser = await User.create({ username, password, firstname, lastname });

        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.error("Error in registerUser:", error.message);
        res.status(500).json({ message: "Error saving user", error: error.message });
    }
};

module.exports = { registerUser };
