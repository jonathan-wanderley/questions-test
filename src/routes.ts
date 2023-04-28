import { Router } from "express";

import TaskController from "./controllers/TaskController";

const routes = Router();

routes.get('/tasks', TaskController.index);
routes.get('/tasks/:id', TaskController.get);
routes.post('/tasks', TaskController.store);

export default routes;
