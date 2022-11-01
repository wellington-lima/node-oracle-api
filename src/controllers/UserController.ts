import User from "../models/User";
import CreateUserService from "../services/CreateUserService";
import DeleteUserService from "../services/DeleteUserService";
import FindByIdUsersService from "../services/FindByIdUsersService";
import ListAllUsersService from "../services/ListAllUsersService";
import UpdateUserService from "../services/UpdateUserService";

class UserController {

  async listAll() {
      const users = await ListAllUsersService.execute();
      return users;
  }
  
  async findById(id: number) {
      const users = await FindByIdUsersService.execute(id);
      return users;
  }
  
  async create(user: User) {
      await CreateUserService.execute(user);
  }

  async update(user: User) {
      await UpdateUserService.execute(user);
  }

  async delete(id: number) {
      await DeleteUserService.execute(id);
  }
}

export default new UserController();