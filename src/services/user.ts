import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import connection from '../models/connection';
import UserModel from '../models/user';
import User from '../interfaces/users';

dotenv.config();

const secret = process.env.JWT_SECRET || 'secret';

class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async create(newUser: User): Promise<string> {
    const { username, vocation, level, password } = newUser;
    const result = await this.model.create({ username, vocation, level, password });
    const token = jwt.sign({ id: result, username }, secret);
    return token;
  }
}

export default UserService;