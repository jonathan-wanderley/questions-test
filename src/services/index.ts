import { CreateTaskService } from "./CreateTaskService";
import { GetTaskService } from "./GetTaskService";
import TaskRepository from "../repositories/TaskRepository";

const taskRepository = new TaskRepository();

const createTaskService = new CreateTaskService(taskRepository);
const getTaskService = new GetTaskService(taskRepository);

export {
  createTaskService,
  getTaskService,
}
