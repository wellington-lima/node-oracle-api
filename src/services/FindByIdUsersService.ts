import oracledb from 'oracledb';
import { createConnection } from '../config/database/ora_connection';

class FindByIdUsersService {

  private client!: oracledb.Connection;

  constructor() {
    createConnection().then((conn) => (this.client = conn));
  }
  
  async execute(id: number): Promise<any[]> {

    const sql = `SELECT * FROM USERS WHERE ID = :id`;

    try {
      const { rows } = await this.client.execute(sql, { id }, { outFormat: oracledb.OUT_FORMAT_OBJECT });
      return rows;

    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new FindByIdUsersService();