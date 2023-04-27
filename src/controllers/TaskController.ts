import { Request, Response } from "express";
import { createTaskService } from "../services";

class TaskController {
  async store(req: Request, res: Response) {
    const { description } = req.body;

    const newTask = await createTaskService.execute(description);

    res.status(201).json(newTask);
  }
}

export default new TaskController();
