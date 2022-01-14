import mysql from 'serverless-mysql'


export const db = mysql({
    config: {
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USERNAME, 
      password: process.env.MYSQL_PASSWORD,
    },
  })

  export async function sql_query(query_string,values = []) {
    try {
      const results = await db.query(query_string, values)
      await db.end()
      return results
    } catch (e) {
      return { e };
    }
  }
