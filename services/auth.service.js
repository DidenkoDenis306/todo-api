import {User} from "../models/user.model.js";
import jwt from "jsonwebtoken";

class AuthService {
    async register(username, password) {
        try {
            const isUserExists = User.findOne({where: username});

            if (isUserExists) {
                throw new Error("User with this username already exists");
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            return await User.create({username, password: hashedPassword})
        } catch (error) {
           throw new Error(error.message)
        }
    }

    async login(username, password) {
        try {
            const user = User.findOne({where: username});

            if (!user) {
                throw new Error("User doesnt exist");
            }

            const isPasswordValid = bcrypt.compare(password, user.password)

            if (!isPasswordValid) {
                throw new Error("Invalid password");
            }

            const token = jwt.sign({id: user.id, username: user.username}, process.env.JWT_SECRET_KEY, {expiresIn: '5h'});

            return token

        } catch (error) {
            throw new Error(error.message)
        }
    }
}

export const authService = new AuthService();
