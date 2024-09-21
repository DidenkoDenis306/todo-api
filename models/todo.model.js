import sequalize from "../db.js";
import {DataTypes} from "sequelize";
import {User} from "./user.model.js";

export const Todo = sequalize.define('Todo', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    due_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'todos',
    timestamps: false,
},)

Todo.belongsTo(User, {foreignKey: 'user_id'})
