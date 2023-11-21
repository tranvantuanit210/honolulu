import { User } from 'src/domains/entities/user';
import { IUserRepository } from 'src/domains/repositories/user.repository.i';
import { CreateUserDto } from 'src/applications/user/create-user.dto';

export class CreateUserUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute(createUserDto: CreateUserDto): Promise<User> {
    return this.usersRepository.createUser(createUserDto);
  }
}
