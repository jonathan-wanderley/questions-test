import { TaskRepositoryInterface } from "../repositories/interfaces/TaskRepositoryInterface";

export class CreateTaskService {
  private taskRepository: TaskRepositoryInterface;

  constructor(taskRepository: TaskRepositoryInterface) {
    this.taskRepository = taskRepository;
  }

  async execute(description: string) {
    return await this.taskRepository.create(description);
  }
}
