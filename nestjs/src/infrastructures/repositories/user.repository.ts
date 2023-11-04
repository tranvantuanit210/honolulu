import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserM } from 'src/domains/model/user';
import { UserRepository } from 'src/domains/repositories/user.repository';
import { CreateUserDto } from 'src/presentations/user/dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { RegisterUserDto } from 'src/presentations/user/dto/register-user.dto';

@Injectable()
export class UserRepositoryOrm implements UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<UserM[]> {
    const users = await this.userRepository.find();
    return users.map((user) => this.toUser(user));
  }

  async createUser(createUserDto: CreateUserDto): Promise<UserM> {
    const user = new User();
    user.parentFirstName = createUserDto.parentFirstName;
    user.parentLastName = createUserDto.parentLastName;
    user.parentEmail = createUserDto.parentEmail;
    return this.userRepository.save(user);
  }

  async registerUser(registerUserDto: RegisterUserDto): Promise<UserM> {
    const user = new User();

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

  private toUser(userEntity: User): UserM {
    const user: UserM = new UserM();

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
