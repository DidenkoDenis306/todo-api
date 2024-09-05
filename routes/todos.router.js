import {Router} from 'express';
import todoController from "../controllers/todo.controller.js";

const todosRouter = Router()

todosRouter.get('/', todoController.getAll)

todosRouter.post('/', todoController.create)

todosRouter.delete('/:id')

export default todosRouter
