import { CreateUserDto } from 'src/presentations/user/dto/create-user.dto';
import { UserM } from '../model/user';
import { RegisterUserDto } from 'src/presentations/user/dto/register-user.dto';

export interface UserRepository {
  createUser(createUserDto: CreateUserDto): Promise<UserM>;
  registerUser(registerUserDto: RegisterUserDto): Promise<UserM>;
  getAllUsers(): Promise<UserM[]>;
}
