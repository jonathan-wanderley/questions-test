import { Router } from "express";

import taskRoutes from "./task";
import authRoutes from "./auth";

const routes = Router();

routes.use(taskRoutes);
routes.use(authRoutes);

export default routes;
