export interface TaskRepositoryInterface {
  create(description: string): Promise<any>;
}

