import { Request, Response } from "express";
import {
  createTaskService,
  getTaskService,
  findAllTasksService,
  deleteTaskService,
  updateTaskService,
} from "../services/task";

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

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { description, done, finished_at } = req.body;

    const updatedTask = await updateTaskService.execute(id, { description, done, finished_at });

    res.json(updatedTask)
  }

  async destroy(req: Request, res: Response) {
    const { id } = req.params;

    await deleteTaskService.execute(id);

    return res.status(204).json('');
  }
}

export default new TaskController();
