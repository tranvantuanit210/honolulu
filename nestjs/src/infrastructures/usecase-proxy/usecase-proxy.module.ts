import { DynamicModule, Module } from '@nestjs/common';
import { GetRegistrationsUseCase } from 'src/applications/user/get-registrations.usecase';
import { EnvironmentConfigModule } from '../config/environment-config/environment-config.module';
import { RepositoriesModule } from '../repositories/repositories.module';
import { UserRepository } from '../repositories/user.repository';
import { UseCaseProxy } from './usecase-proxy';
import { RegisterUserUseCase } from 'src/applications/user/register-user.usecase';
import { RegistrationRepository } from '../repositories/registration.repository';
import { CreateUserUseCase } from 'src/applications/user/create-user.usecase';

@Module({
  imports: [EnvironmentConfigModule, RepositoriesModule],
})
export class UsecaseProxyModule {
  static GET_ALL_USERS_USE_CASE = 'getAllUsersUsecaseProxy';
  static CREATE_USER_USE_CASE = 'createUserUsecaseProxy';
  static REGISTER_USER_USE_CASE = 'registerUserUsecaseProxy';

  static register(): DynamicModule {
    return {
      module: UsecaseProxyModule,
      providers: [
        {
          inject: [RegistrationRepository],
          provide: UsecaseProxyModule.GET_ALL_USERS_USE_CASE,
          useFactory: (registrationRepository: RegistrationRepository) =>
            new UseCaseProxy(
              new GetRegistrationsUseCase(registrationRepository),
            ),
        },
        {
          inject: [UserRepository],
          provide: UsecaseProxyModule.CREATE_USER_USE_CASE,
          useFactory: (userRepository: UserRepository) =>
            new UseCaseProxy(new CreateUserUseCase(userRepository)),
        },
        {
          inject: [RegistrationRepository],
          provide: UsecaseProxyModule.REGISTER_USER_USE_CASE,
          useFactory: (registrationRepository: RegistrationRepository) =>
            new UseCaseProxy(new RegisterUserUseCase(registrationRepository)),
        },
      ],
      exports: [
        UsecaseProxyModule.GET_ALL_USERS_USE_CASE,
        UsecaseProxyModule.CREATE_USER_USE_CASE,
        UsecaseProxyModule.REGISTER_USER_USE_CASE,
      ],
    };
  }
}
