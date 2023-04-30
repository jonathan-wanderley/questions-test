import { TaskRepositoryInterface } from "../repositories/interfaces/TaskRepositoryInterface";

interface UpdateTaskDto {
  description?: string;
  done?: boolean;
  finished_at?: Date;
}

export class UpdateTaskService {
  private taskRepository: TaskRepositoryInterface;

  constructor(taskRepository: TaskRepositoryInterface) {
    this.taskRepository = taskRepository;
  }

  async execute(id: string, data: UpdateTaskDto) {
    return await this.taskRepository.update(id, data);
  }
}
