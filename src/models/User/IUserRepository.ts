import { User } from "../../entities/User";

export default interface IUserRepository {
  createUser(user: User): Promise<void>;
  getUserByGoogleId(googleId: string): Promise<User>;
}