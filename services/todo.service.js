import pool from "../db.js";

class TodoService {
    async createTodo(todo) {
        const {title, description, due_date, user_id} = todo

        try {
            const result = await pool.query(
                'INSERT INTO todos (title, description, due_date, user_id) VALUES ($1, $2, $3, $4) RETURNING *',
                [title, description, due_date, user_id]
            )

            return result
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async getTodos() {
        try {
            const result = await pool.query(
                'SELECT * FROM todos'
            )

            return result
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async getTodoById(id) {

    }

    async updateTodo(id) {

    }

    async deleteTodo(id) {

    }
}

export default new TodoService()
