import { AppError } from "../../errors/AppError";
import errorMessages from "../../errors";
import { TaskRepositoryInterface } from "../../repositories/interfaces/TaskRepositoryInterface";

export class GetTaskService {
  private taskRepository: TaskRepositoryInterface;

  constructor(taskRepository: TaskRepositoryInterface) {
    this.taskRepository = taskRepository;
  }

  async execute(id: string) {
    const foundTask = await this.taskRepository.findOne(id);
    if(!foundTask) {
      throw new AppError(404, errorMessages.task.notFound)
    }
  }
}
