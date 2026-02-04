import { Router } from "express";
import todoController from "../controllers/todo.controller.js";

const router = Router();

router.route("/").get(todoController.getAll);

router.route("/:id").get(todoController.getById);

router.route("/").post(todoController.create);

router.route("/:id").put(todoController.update);

router.route("/:id").delete(todoController.deleteById);

export default router;
