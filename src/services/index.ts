import { CreateTaskService } from "./CreateTaskService";
import { UpdateTaskService } from "./UpdateTaskService";
import { GetTaskService } from "./GetTaskService";
import { FindAllTasksService } from "./FindAllTasksService";
import { DeleteTaskService } from "./DeleteTaskService";

import TaskRepository from "../repositories/TaskRepository";

const taskRepository = new TaskRepository();

const createTaskService = new CreateTaskService(taskRepository);
const getTaskService = new GetTaskService(taskRepository);
const findAllTasksService = new FindAllTasksService(taskRepository);
const deleteTaskService = new DeleteTaskService(taskRepository);
const updateTaskService = new UpdateTaskService(taskRepository);

export {
  createTaskService,
  getTaskService,
  findAllTasksService,
  deleteTaskService,
  updateTaskService,
}
