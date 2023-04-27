import { Request, Response } from 'express';
import UserService from '../services/user';
import User from '../interfaces/users';

class UserController {
  userService: UserService;
  
  constructor(userService = new UserService()) {
    this.userService = userService;
    this.create = this.create.bind(this);
  }

  async create(req: Request, res: Response): Promise<void> {
    const { username, vocation, level, password }: User = req.body;
    const result = await this.userService.create({ username, vocation, level, password });

    res.status(201).json({ token: result });
  }
}

export default UserController;