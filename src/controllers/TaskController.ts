import { Request, Response } from "express";
import { createTaskService, getTaskService } from "../services";

class TaskController {
  async store(req: Request, res: Response) {
    const { description } = req.body;

    const newTask = await createTaskService.execute(description);

    res.status(201).json(newTask);
  }

  async get(req: Request, res: Response) {
    const { id } = req.params;

    const foundTask = await getTaskService.execute(id);

    return res.json(foundTask);
  }
}

export default new TaskController();
