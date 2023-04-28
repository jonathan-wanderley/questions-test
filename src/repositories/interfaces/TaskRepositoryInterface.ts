export interface TaskRepositoryInterface {
  create(description: string): Promise<any>;
  findOne(id: string): Promise<any>;
}

