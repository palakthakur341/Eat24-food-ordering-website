import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import validator from "validator"

//login user 
const loginUser = async (req, res) => {
    console.log("Login API hit with data:", req.body);

    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });
        console.log("User found:", user);

        if (!user) {
            return res.json({ success: false, message: "User Doesn't exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Password Match:", isMatch);

        if (!isMatch) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        const token = createToken(user._id);
        console.log("Generated Token:", token);

        res.json({ success: true, token });
    } catch (error) {
        console.error("Error in loginUser:", error);
        res.json({ success: false, message: error.message });
    }
}
const createToken = (id) => {
    if (!process.env.JWT_SECRET) {
        console.error("Error: JWT_SECRET is not defined in .env file!");
    }
    return jwt.sign({ id }, process.env.JWT_SECRET || "default_secret", { expiresIn: "7d" });
}
//regiter user
const registerUser = async (req, res) => {
    console.log("Register API hit with data:", req.body); // ✅ Logs incoming data

    const { name, email,password } = req.body;

    try {
        // Checking if the user already exists
        const exists = await userModel.findOne({ email });
        console.log("User exists check:", exists); // ✅ Logs if user exists

        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);
        // Validating email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid Email" });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        // Hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Creating new user
        const newUser = new userModel({
            name:name,
            email:email,
            password: hashedPassword
        });

        const user = await newUser.save();
        console.log("New User Saved:", user); // ✅ Logs new user details

        const token = createToken(user._id);
        console.log("Generated Token:", token); // ✅ Logs generated token

        res.json({ success: true, token });
    } catch (error) {
        console.error("Error in registerUser:", error);
        res.json({ success: false, message: error.message }); // ✅ Sends error message
    }
}
export {loginUser,registerUser}