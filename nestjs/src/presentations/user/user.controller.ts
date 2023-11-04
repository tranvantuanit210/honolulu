import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { GetAllUserUseCases } from 'src/applications/use-cases/getAllUsers.usecase';
import { CreateUserUseCases } from 'src/applications/use-cases/createUser.usecase';
import { UseCaseProxy } from 'src/infrastructures/usecase-proxy/usecase-proxy';
import { UsecaseProxyModule } from 'src/infrastructures/usecase-proxy/usecase-proxy.module';
import { CreateUserDto } from './dto/create-user.dto';
import { RegisterUserUseCases } from 'src/applications/use-cases/registerUser.usecase';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('users')
export class UserController {
  constructor(
    @Inject(UsecaseProxyModule.GET_ALL_USERS_USE_CASE)
    private readonly getUserUsecaseProxy: UseCaseProxy<GetAllUserUseCases>,
    @Inject(UsecaseProxyModule.CREATE_USER_USE_CASE)
    private readonly createUserUsecaseProxy: UseCaseProxy<CreateUserUseCases>,
    @Inject(UsecaseProxyModule.REGISTER_USER_USE_CASE)
    private readonly registerUserUsecaseProxy: UseCaseProxy<RegisterUserUseCases>,
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
