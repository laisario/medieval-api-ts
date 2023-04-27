import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/users';

export default class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(newUser: User): Promise<number> {
    const { username, vocation, level, password } = newUser;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    return insertId;
  }
}