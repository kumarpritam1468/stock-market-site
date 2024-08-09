const User = require('../models/userModel');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const setCookie = (userId, res) => {
    try {
        const token = jwt.sign({ userId }, process.env.JWT_KEY, {
            expiresIn: '15d'
        });

        res.cookie('jwt', token, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true, // prevents XSS attacks
            secure: process.env.NODE_ENV !== 'developement',
            sameSite: 'strict' // prevents CSRF attacks
        });
    } catch (error) {
        console.log(error);
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: "Incorrect E-mail or Password" });
        }

        const isCorrect = await bcrypt.compare(password, user.password);

        if (!isCorrect) {
            return res.status(400).json({ error: "Incorrect E-mail or Password" });
        }

        setCookie(user._id, res);

        res.status(200).json({ message: "Logged In Successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Failed to login"});
    }
}

const register = async (req, res) => {
    try {
        const { name, email, phone, password, cPassword } = req.body;

        if (!name || !email || !phone || !password || !cPassword) {
            return res.status(400).json({ error: "Fill all the fields" });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: "Enter valid email" });
        }

        if (password.length < 6) {
            return res.status(400).json({ error: "Password should be 6 characters" });
        }

        if (password !== cPassword) {
            return res.status(400).json({ error: "Password and confirm passwords should match" });
        }

        if (phone.length !== 10) {
            return res.status(400).json({ error: "Enter valid phone number" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            phone,
            password: hashedPassword
        });

        await newUser.save();

        setCookie(newUser._id, res);

        res.status(201).json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Failed to register"});
    }
}

const logout = async (req, res) => {
    try {
        res.cookie('jwt', '', { maxAge: 0, secure: true });

        res.status(200).json({ message: "Logged Out" });
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Failed to logout"});
    }
}

module.exports = { login, register, logout };