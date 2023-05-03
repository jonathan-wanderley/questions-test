import { AppError } from "../../errors/AppError";
import errorMessages from "../../errors";
import { TaskRepositoryInterface } from "../../repositories/interfaces/TaskRepositoryInterface";

export class DeleteTaskService {
  private taskRepository: TaskRepositoryInterface;

  constructor(taskRepository: TaskRepositoryInterface) {
    this.taskRepository = taskRepository;
  }

  async execute(id: string) {
    await this.taskRepository.delete(id);
  }
}
