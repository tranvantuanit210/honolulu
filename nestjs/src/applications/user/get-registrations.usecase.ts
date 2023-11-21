import { User } from 'src/domains/entities/user';
import { IRegistrationRepository } from 'src/domains/repositories/registration.repository.i';

export class GetRegistrationsUseCase {
  constructor(private registrationRepository: IRegistrationRepository) {}

  async execute(): Promise<User[]> {
    return await this.registrationRepository.getRegistrations();
  }
}
