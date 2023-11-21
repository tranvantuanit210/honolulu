import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigModule } from '../config/typeorm/typeorm.module';
import { UserRepository } from './user.repository';
import { RegistrationRepository } from './registration.repository';
import { RegistrationTable } from '../schema/registration.table';
import { ParticipantTable } from '../schema/participant.table';
import { RegistrationParticipantTable } from '../schema/registration-participant.table';
import { UserTable } from '../schema/user.table';

@Module({
  imports: [
    TypeOrmConfigModule,
    TypeOrmModule.forFeature([
      UserTable,
      RegistrationTable,
      ParticipantTable,
      RegistrationParticipantTable,
    ]),
  ],
  providers: [UserRepository, RegistrationRepository],
  exports: [UserRepository, RegistrationRepository],
})
export class RepositoriesModule {}
