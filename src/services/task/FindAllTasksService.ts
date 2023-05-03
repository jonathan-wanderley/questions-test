import { TaskRepositoryInterface } from "../../repositories/interfaces/TaskRepositoryInterface";

export class FindAllTasksService {
  private taskRepository: TaskRepositoryInterface;

  constructor(taskRepository: TaskRepositoryInterface) {
    this.taskRepository = taskRepository;
  }

  async execute() {
    return await this.taskRepository.findAll();
  }
}
