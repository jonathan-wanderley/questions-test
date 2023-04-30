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

  async update(id: string, data: { description?: string, done?: boolean, finished_at?: Date }): Promise<any> {
    return await prismaClient.task.update({
      where: {
        id,
      },
      data,
    })
  }

  async findOne(id: string): Promise<any> {
    return await prismaClient.task.findFirst({
      where: {
        id
      }
    })
  }

  async findAll(): Promise<any> {
    return await prismaClient.task.findMany();
  }

  async delete(id: string): Promise<any> {
    return await prismaClient.task.delete({
      where: {
        id,
      }
    })
  }
}
