import { CreateTaskService } from "./CreateTaskService";
import { GetTaskService } from "./GetTaskService";
import { FindAllTasksService } from "./FindAllTasksService";
import TaskRepository from "../repositories/TaskRepository";

const taskRepository = new TaskRepository();

const createTaskService = new CreateTaskService(taskRepository);
const getTaskService = new GetTaskService(taskRepository);
const findAllTasksService = new FindAllTasksService(taskRepository);

export {
  createTaskService,
  getTaskService,
  findAllTasksService,
}
