import { User } from "../../entities/User";
import { userRepository } from "../../models/User/UserRepository";
import { submitCreationRules } from "./BusinessRules/creationRules";
import IUserUseCases from "./IUserUseCases";
import IUserdUseCases from "./IUserUseCases";


const formatUserAttributes = (user: User) => {
  user.id = Number(user.id);
  user.name = user.name.trim();
  user.email = user.email.trim();
}

class UserUseCases implements IUserdUseCases {
  async createUser(user: User): Promise<void> {
    formatUserAttributes(user)
    submitCreationRules(user)
    return await userRepository.createUser(user);
  }
  async getUserByGoogleId(id: string): Promise<User> {
    return await userRepository.getUserByGoogleId(id);
  }  
}

export const userUseCases = new UserUseCases() as IUserUseCases;