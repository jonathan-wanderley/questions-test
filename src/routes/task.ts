import { Router } from "express";
import TaskController from "../controllers/TaskController";
import TaskValidator from "../validators/TaskValidator";
import { checkLogin } from "../middlewares/checkLogin";

const routes = Router();

routes.get('/tasks', checkLogin, TaskController.index);
routes.get('/tasks/:id', TaskController.get);
routes.post('/tasks', TaskValidator.create, TaskController.store);
routes.put('/tasks/:id', TaskValidator.update, TaskController.update);
routes.delete('/tasks/:id', TaskController.destroy);

export default routes;
