import { User } from 'src/domains/entities/user';
import { IRegistrationRepository } from 'src/domains/repositories/registration.repository.i';
import { RegisterUserDto } from 'src/applications/user/register-user.dto';

export class RegisterUserUseCase {
  constructor(private registrationRepository: IRegistrationRepository) {}

  async execute(regiterUserDto: RegisterUserDto): Promise<User> {
    return this.registrationRepository.register(regiterUserDto);
  }
}
