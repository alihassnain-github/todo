import { Todo } from "../models/todo.model.js";

class TodoRepository {
    create(todo) {
        return Todo.create(todo);
    }

    update(id, todo) {
        return Todo.findByIdAndUpdate(id, todo, { new: true });
    }

    deleteById(id) {
        return Todo.findByIdAndDelete(id);
    }

    getById(id) {
        return Todo.findById(id);
    }

    getAll() {
        return Todo.find({});
    }
}

export default new TodoRepository();
