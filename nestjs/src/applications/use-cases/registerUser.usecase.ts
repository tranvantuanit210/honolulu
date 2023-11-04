import { UserM } from 'src/domains/model/user';
import { UserRepository } from 'src/domains/repositories/user.repository';
import { RegisterUserDto } from 'src/presentations/user/dto/register-user.dto';

export class RegisterUserUseCases {
  constructor(private usersRepository: UserRepository) {}

  async execute(regiterUserDto: RegisterUserDto): Promise<UserM> {
    return this.usersRepository.registerUser(regiterUserDto);
  }
}
