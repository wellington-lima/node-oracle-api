import oracledb from 'oracledb';
import { createConnection } from '../config/database/ora_connection';

class ListAllUsersService {

  private client!: oracledb.Connection;

  constructor() {
    createConnection().then((conn) => (this.client = conn));
  }
  
  async execute(): Promise<any[]> {

    const sql = `SELECT * FROM USERS`;

    try {
      const { rows } = await this.client.execute(sql, [], { outFormat: oracledb.OUT_FORMAT_OBJECT });
      return rows;

    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new ListAllUsersService();