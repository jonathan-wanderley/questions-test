import { Request, Response } from "express";
import {
  createTaskService,
  getTaskService,
  findAllTasksService
} from "../services";

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

  async index(req: Request, res: Response) {
    const taskList = await findAllTasksService.execute();

    return res.json(taskList);
  }
}

export default new TaskController();
