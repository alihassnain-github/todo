import todoRepository from "../repositories/todo.repo.js";

class TodoService {
    constructor(todoRepository) {
        this.todoRepo = todoRepository;
    }

    create(data) {
        return this.todoRepo.create(data);
    }

    update(id, todo) {
        return this.todoRepo.update(id, todo);
    }

    deleteById(id) {
        return this.todoRepo.deleteById(id);
    }

    getById(id) {
        return this.todoRepo.getById(id);
    }

    getAll() {
        return this.todoRepo.getAll();
    }
}

export default new TodoService(todoRepository);
