import { CreateTaskService } from "./CreateTaskService";
import TaskRepository from "../repositories/TaskRepository";

const taskRepository = new TaskRepository();

const createTaskService = new CreateTaskService(taskRepository);

export {
  createTaskService
}
