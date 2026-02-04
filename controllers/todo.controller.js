import todoService from "../services/todo.service.js";

class TodoController {
    constructor(todoService) {
        this.todoServ = todoService;
    }

    create = async (req, res) => {
        const createdTodo = await this.todoServ.create(req.body);
        res.status(200).json({
            success: true,
            message: "Todo created",
            data: createdTodo,
        });
    }

    update = async (req, res) => {
        const id = req.params.id;
        const updatedTodo = await this.todoServ.update(id, req.body);
        res.status(200).json({
            success: true,
            message: "Todo updated",
            data: updatedTodo,
        });
    }

    deleteById = async (req, res) => {
        const id = req.params.id;
        const deletedTodo = await this.todoServ.deleteById(id);
        res.status(200).json({
            success: true,
            message: "Todo deleted",
            data: deletedTodo,
        });
    }

    getById = async (req, res) => {
        const id = req.params.id;
        const todo = await this.todoServ.getById(id);
        res.status(200).json({
            success: true,
            message: "Todo deleted",
            data: todo,
        });
    }

    getAll = async (req, res) => {
        const allTodos = await this.todoServ.getAll();
        res.status(200).json({
            success: true,
            message: "",
            data: allTodos,
        });
    }
}

export default new TodoController(todoService);
