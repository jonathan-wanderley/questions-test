import { Router } from "express";

import TaskController from "./controllers/TaskController";

const routes = Router();

routes.post('/tasks', TaskController.store);

export default routes;
