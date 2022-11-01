import oracledb from 'oracledb';
import { createConnection } from '../config/database/ora_connection';
import { reqResApi } from '../config/api/resReq';

(async () => {

  const users = await reqResApi.get('/users');

  let client!: oracledb.Connection;

  await createConnection().then((conn) => (client = conn));

  let sql = `INSERT ALL `;
  let sqlValues = '';

  users.data.map((user) => {
    sqlValues += `INTO USERS (ID, EMAIL, FIRST_NAME, LAST_NAME, AVATAR) 
                      VALUES (${user.id}, '${user.email}', '${user.first_name}', '${user.last_name}', '${user.avatar}') `;

  });

  sql += sqlValues;
  sql += 'SELECT * FROM DUAL'

  try {

    await client.execute(sql, []);
    await client.execute("commit");

    console.log(`✅ Usuarios importados corretamente`);

  } catch (error) {
    throw new Error(error);

  }
})();