import oracledb from 'oracledb';
import { createConnection } from '../config/database/ora_connection';
import User from '../models/User';

class UpdateUserService {

  private client!: oracledb.Connection;

  constructor() {
    createConnection().then((conn) => (this.client = conn));
  }
  
  async execute(user: User) {

    const { ID, EMAIL, FIRST_NAME, LAST_NAME, AVATAR } = user;

    const sql = 'UPDATE USERS SET EMAIL=:EMAIL, FIRST_NAME=:FIRST_NAME, LAST_NAME=:LAST_NAME, AVATAR=:AVATAR WHERE ID=:ID';

    try {
      
      await this.client.execute(sql, { EMAIL, FIRST_NAME, LAST_NAME, AVATAR, ID });
      await this.client.execute('COMMIT');

    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new UpdateUserService();