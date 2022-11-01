import oracledb from 'oracledb';
import { createConnection } from '../config/database/ora_connection';

class DeleteUserService {

  private client!: oracledb.Connection;

  constructor() {
    createConnection().then((conn) => (this.client = conn));
  }
  
  async execute(id: number) {

    const sql = 'DELETE FROM USERS WHERE ID=:id';

    try {
      await this.client.execute(sql, { id });
      await this.client.execute('COMMIT');

    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new DeleteUserService();