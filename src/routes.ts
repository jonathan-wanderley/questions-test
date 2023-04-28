import { Router } from "express";

import TaskController from "./controllers/TaskController";

const routes = Router();

routes.get('/tasks', TaskController.index);
routes.get('/tasks/:id', TaskController.get);
routes.post('/tasks', TaskController.store);
routes.delete('/tasks/:id', TaskController.destroy);

export default routes;
