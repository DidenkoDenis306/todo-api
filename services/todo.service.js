import {Todo} from "../models/todo.model.js";

class TodoService {
    async createTodo(todo) {
        const {title, description, due_date, user_id} = todo

        try {
            console.log("data", title, description, due_date, user_id)
            return await Todo.create({title, description, due_date, user_id})
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async getTodos() {
        try {
           return await Todo.findAll() || []
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async getTodoById(id) {
        try {
            return await Todo.findByPk(id)
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async updateTodo(id, todo) {
        try {
           return await Todo.update(todo, {where: id})
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async deleteTodo(id) {
        try {
            return await Todo.destroy({where: {id}})
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

export default new TodoService()
