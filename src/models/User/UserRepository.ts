import IUserRepository from "./IUserRepository";
import {Card} from "../../entities/Card";
import {PrismaClient} from "@prisma/client";
import {difficultyRepository} from "../difficulty/DifficultyRepository";
import { User } from "../../entities/User";

class UserRepository implements IUserRepository {

    private prisma: PrismaClient = new PrismaClient();
  
    async createUser(user: User): Promise<void> {
      await this.prisma.user.create({
        data: {
          googleId: user.googleId,
          name: user.name,
          email: user.email
        }
      })
    }  
    
    async getUserByGoogleId(googleId: string): Promise<User> {
        const user = await this.prisma.user.findUnique({
          where: {
            googleId
          }
        })
        console.log(user)
        return user as User
    }

}

export const userRepository = new UserRepository() as IUserRepository;