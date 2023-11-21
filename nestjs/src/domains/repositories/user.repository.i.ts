import { CreateUserDto } from 'src/applications/user/create-user.dto';
import { RegisterUserDto } from 'src/applications/user/register-user.dto';
import { User } from '../entities/user';

export interface IUserRepository {
  createUser(createUserDto: CreateUserDto): Promise<User>;
  registerUser(registerUserDto: RegisterUserDto): Promise<User>;
  getAllUsers(): Promise<User[]>;
}
