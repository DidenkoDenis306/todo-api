import express from 'express';
import todosRouter from "./routes/todos.router.js";

const app = express()

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/todos', todosRouter)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
