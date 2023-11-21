import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/applications/user/create-user.dto';
import { Repository } from 'typeorm';
import { RegisterUserDto } from 'src/applications/user/register-user.dto';
import { User } from 'src/domains/entities/user';
import { IUserRepository } from 'src/domains/repositories/user.repository.i';
import { UserTable } from '../schema/user.table';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserTable)
    private readonly userRepository: Repository<UserTable>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users.map((user) => this.toUser(user));
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = new UserTable();
    user.parentFirstName = createUserDto.parentFirstName;
    user.parentLastName = createUserDto.parentLastName;
    user.parentEmail = createUserDto.parentEmail;
    return this.userRepository.save(user);
  }

  async registerUser(registerUserDto: RegisterUserDto): Promise<User> {
    const user = new UserTable();

    // Assign parent properties
    user.parentFirstName = registerUserDto.parentFirstName;
    user.parentLastName = registerUserDto.parentLastName;
    user.parentPhoneNumber = registerUserDto.parentPhoneNumber;
    user.parentEmail = registerUserDto.parentEmail;
    user.address = registerUserDto.address;
    user.city = registerUserDto.city;
    user.zipCode = registerUserDto.zipCode;
    user.homeChurch = registerUserDto.homeChurch;
    user.parentSignature = registerUserDto.parentSignature;
    user.signDate = registerUserDto.signDate;
    user.payPlan = registerUserDto.payPlan;

    // Assign student properties individually
    for (let i = 1; i <= 5; i++) {
      const student = `student${i}`;
      user[`${student}FirstName`] = registerUserDto[`${student}FirstName`];
      user[`${student}Age`] = registerUserDto[`${student}Age`];
      user[`${student}BirthDate`] = registerUserDto[`${student}BirthDate`];
      user[`${student}PhoneNumber`] = registerUserDto[`${student}PhoneNumber`];
      user[`${student}Email`] = registerUserDto[`${student}Email`];
      user[`${student}ParticipateType`] =
        registerUserDto[`${student}ParticipateType`];
      user[`${student}Signature`] = registerUserDto[`${student}Signature`];
    }

    return this.userRepository.save(user);
  }

  private toUser(userEntity: UserTable): User {
    const user: User = new User();

    user.id = userEntity.id;
    user.parentFirstName = userEntity.parentFirstName;
    user.parentLastName = userEntity.parentLastName;
    user.parentPhoneNumber = userEntity.parentPhoneNumber;
    user.parentEmail = userEntity.parentEmail;
    user.address = userEntity.address;
    user.city = userEntity.city;
    user.zipCode = userEntity.zipCode;
    user.homeChurch = userEntity.homeChurch;
    user.parentSignature = userEntity.parentSignature;
    user.signDate = userEntity.signDate;
    user.payPlan = userEntity.payPlan;

    user.created_at = userEntity.created_at;
    user.updated_at = userEntity.updated_at;

    return user;
  }
}
