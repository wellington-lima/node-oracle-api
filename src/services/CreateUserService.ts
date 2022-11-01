import oracledb from 'oracledb';
import { createConnection } from '../config/database/ora_connection';
import User from '../models/User';

class CreateUserService {

  private client!: oracledb.Connection;

  constructor() {
    createConnection().then((conn) => (this.client = conn));
  }
  
  async execute(user: User) {

    const { ID, EMAIL, FIRST_NAME, LAST_NAME, AVATAR } = user;

    const sql = `INSERT INTO USERS (ID, EMAIL, FIRST_NAME, LAST_NAME, AVATAR) VALUES (:ID, :EMAIL, :FIRST_NAME, :LAST_NAME, :AVATAR)`;

    try {
      await this.client.execute(sql, 
        { ID, EMAIL, FIRST_NAME, LAST_NAME, AVATAR }, 
      );

      await this.client.execute('COMMIT');

    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new CreateUserService();