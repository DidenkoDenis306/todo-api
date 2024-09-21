import todoService from "../services/todo.service.js";

class TodoController {
    async create(req, res) {
        const todo = req.body

        try {
            const result = await todoService.createTodo(todo)
            console.log("controller", result)
            res.status(201).json(result)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async getAll(req, res) {
        try {
            const result = await todoService.getTodos()

            res.status(201).json(result)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async getOne(req, res) {
        const { id } = req.params

        try {
            const result = await todoService.getTodoById(id)

            res.status(201).json(result)
        } catch  (error) {
            res.status(500).json({error: error.message})
        }
    }

    async update(req, res) {
        const { id, todo } = req.params

        try {
            const result = await todoService.updateTodo(id, todo)

            res.status(201).json(result)
        } catch  (error) {
            res.status(500).json({error: error.message})
        }
    }

    async delete(req, res) {
        const { id } = req.params

        try {
            const result = await todoService.deleteTodo(id)

            res.status(201).json(id)
        } catch  (error) {
            res.status(500).json({error: error.message})
        }
    }
}

export default new TodoController()
