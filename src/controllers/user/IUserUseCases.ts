import { User } from "../../entities/User";

export default interface IUserdUseCases {
  createUser(user: User): Promise<void>;
}
