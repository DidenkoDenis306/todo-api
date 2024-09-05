import todoService from "../services/todo.service.js";

class TodoController {
    async create(req, res) {
        const todo = req.body

        try {
            const result = await todoService.createTodo(todo)

            res.status(201).json(result.rows[0])
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async getAll(req, res) {
        try {
            const result = await todoService.getTodos()

            res.status(201).json(result.rows)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async getOne(req, res) {

    }

    async update(req, res) {

    }

    async delete(req, res) {

    }
}

export default new TodoController()
