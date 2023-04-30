export interface TaskRepositoryInterface {
  create(description: string): Promise<any>;
  update(id: string, data: { description?: string, done?: boolean }): Promise<any>;
  findOne(id: string): Promise<any>;
  findAll(): Promise<any>;
  delete(id: string): Promise<any>;
}

