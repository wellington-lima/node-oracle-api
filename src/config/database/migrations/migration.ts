import oracledb from 'oracledb';
import path from 'path';
import fs from 'fs';
import { createConnection } from '../ora_connection';

(async () => {
  
  let client!: oracledb.Connection;

  await createConnection().then((conn) => (client = conn));

  const fileDatabaseDir = path.join(__dirname, 'sentences');

  fs.readdir(fileDatabaseDir, (err, files) => {
    if(err) {
      console.log(err);
    }

    const totalMigrations= files.length -1;
        
    let i = 0;
    
    files.forEach((file) => {
      fs.readFile(path.join(fileDatabaseDir, file), async (err, content) => {
        if(err) {
          console.log(err);
        }

        const runMigrationQuery = content.toString();
        await client.execute(runMigrationQuery);
        
      })
    })
    
  });

  console.log('Migration concluída!');
})();