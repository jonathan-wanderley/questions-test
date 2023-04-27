import { TaskRepositoryInterface } from "./interfaces/TaskRepositoryInterface";
import { prismaClient } from "../database/prismaClient";

export default class TaskRepository implements TaskRepositoryInterface {
  async create(description: string): Promise<any> {
    return await prismaClient.task.create({
      data: {
        description
      }
    })
  }
}
