import { RegisterUserDto } from 'src/applications/user/register-user.dto';
import { User } from '../entities/user';

export interface IRegistrationRepository {
  register(registerUserDto: RegisterUserDto);
  getRegistrations(): Promise<User[]>;
}
