import sequalize from "../db.js";
import {DataTypes} from "sequelize";

export const User = sequalize.define("User", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: "users",
    timestamps: false,
})


