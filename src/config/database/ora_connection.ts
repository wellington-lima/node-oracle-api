import dotenv from "dotenv";
import oracledb from "oracledb";

dotenv.config();

export const createConnection = async () => {

      const client = {
            user: process.env.ORA_USER,
            password: process.env.ORA_PASSWORD,
            connectString: `(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)
                                          (HOST = ${process.env.ORA_HOST})
                                          (PORT = ${process.env.ORA_PORT}))
                                          (CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=${process.env.ORA_SERVICE})))`,
            externalAuth: process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
      };

      const connection = await oracledb.getConnection(client);

      return connection;
}