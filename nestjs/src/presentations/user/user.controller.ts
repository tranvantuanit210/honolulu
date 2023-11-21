import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { UseCaseProxy } from 'src/infrastructures/usecase-proxy/usecase-proxy';
import { UsecaseProxyModule } from 'src/infrastructures/usecase-proxy/usecase-proxy.module';
import { CreateUserDto } from '../../applications/user/create-user.dto';
import { RegisterUserDto } from '../../applications/user/register-user.dto';
import { CreateUserUseCase } from 'src/applications/user/create-user.usecase';
import { GetRegistrationsUseCase } from 'src/applications/user/get-registrations.usecase';
import { RegisterUserUseCase } from 'src/applications/user/register-user.usecase';

@Controller('users')
export class UserController {
  constructor(
    @Inject(UsecaseProxyModule.GET_ALL_USERS_USE_CASE)
    private readonly getUserUsecaseProxy: UseCaseProxy<GetRegistrationsUseCase>,
    @Inject(UsecaseProxyModule.CREATE_USER_USE_CASE)
    private readonly createUserUsecaseProxy: UseCaseProxy<CreateUserUseCase>,
    @Inject(UsecaseProxyModule.REGISTER_USER_USE_CASE)
    private readonly registerUserUsecaseProxy: UseCaseProxy<RegisterUserUseCase>,
  ) {}

  @Get('')
  async getAllUsers() {
    const result = await this.getUserUsecaseProxy.getInstance().execute();
    return {
      status: 'OK',
      code: 200,
      message: 'Get data success',
      data: result,
    };
  }

  @Post('/signup')
  async createUser(@Body() createUserDto: CreateUserDto) {
    const { parentFirstName, parentLastName, parentEmail } = createUserDto;
    const result = await this.createUserUsecaseProxy.getInstance().execute({
      parentFirstName,
      parentLastName,
      parentEmail,
    });
    return {
      status: 'Created',
      code: 201,
      message: 'Insert data success',
      data: result,
    };
  }

  @Post('/register')
  async registerUser(@Body() registerUserDto: RegisterUserDto) {
    const result = await this.registerUserUsecaseProxy.getInstance().execute({
      ...registerUserDto,
    });

    return {
      status: 'Created',
      code: 201,
      message: 'Insert data success',
      data: result,
    };
  }
}
