import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterUserDto } from 'src/applications/user/register-user.dto';
import { Participant } from 'src/domains/entities/participant';
import { Registration } from 'src/domains/entities/registration';
import { RegistrationParticipant } from 'src/domains/entities/registration-participant';
import { ParticipateType } from 'src/domains/enums/participate-type.enum';
import { IRegistrationRepository } from 'src/domains/repositories/registration.repository.i';
import { ParticipantTable } from '../schema/participant.table';
import { RegistrationParticipantTable } from '../schema/registration-participant.table';
import { RegistrationTable } from '../schema/registration.table';

@Injectable()
export class RegistrationRepository implements IRegistrationRepository {
  constructor(
    @InjectRepository(RegistrationTable)
    private readonly registrationRepository: Repository<RegistrationTable>,
    @InjectRepository(ParticipantTable)
    private readonly participantRepository: Repository<ParticipantTable>,
    @InjectRepository(RegistrationParticipantTable)
    private readonly registrationParticipantRepository: Repository<RegistrationParticipantTable>,
  ) {}

  async getRegistrations(): Promise<any> {
    const queryBuilder = this.participantRepository
      .createQueryBuilder('participant')
      .select([
        'participant.first_name AS "parentFirstName"',
        'participant.last_name AS "parentLastName"',
        'participant.email AS "parentEmail"',
        'participant.address AS address',
        'participant.city AS city',
        'registration.home_church as "homeChurch"',
      ])
      .innerJoin('participant.registrations', 'registration');

    return queryBuilder.getRawMany();
  }

  async register(registerUserDto: RegisterUserDto) {
    const participant = await this.createParentParticipant(registerUserDto);
    const registration = await this.createRegistration(
      registerUserDto,
      participant.id,
    );

    await this.registerStudentParticipant(registerUserDto, registration.id);
  }

  private async registerStudentParticipant(
    registerUserDto: RegisterUserDto,
    registrationId: string,
  ) {
    // Assign student properties individually
    for (let i = 1; i <= 5; i++) {
      const student = `student${i}`;
      const firstName = registerUserDto[`${student}FirstName`];
      const birthDate = registerUserDto[`${student}BirthDate`];
      const phoneNumber = registerUserDto[`${student}PhoneNumber`];
      const email = registerUserDto[`${student}Email`];
      const participateType = registerUserDto[`${student}ParticipateType`];
      const signature = registerUserDto[`${student}Signature`];

      if (
        firstName &&
        birthDate &&
        phoneNumber &&
        email &&
        participateType &&
        signature
      ) {
        const participant = new Participant();
        participant.firstName = firstName;
        participant.lastName = ' ';
        participant.phoneNumber = phoneNumber;
        participant.email = email;
        participant.signature = signature;
        participant.participateType = participateType.toString();
        participant.participateAs = ParticipateType.Student;

        const participantCreated = await this.createParticipant(participant);

        const registrationParticipant = new RegistrationParticipant();
        registrationParticipant.registrationId = registrationId;
        registrationParticipant.studentId = participantCreated.id;

        await this.registrationParticipantRepository
          .save(registrationParticipant)
          .then();
      }
    }
  }

  private async createParentParticipant(registerUserDto: RegisterUserDto) {
    const participant = new Participant();
    const {
      parentFirstName,
      parentLastName,
      parentPhoneNumber,
      parentEmail,
      address,
      city,
      zipCode,
      parentSignature,
    } = registerUserDto;
    participant.firstName = parentFirstName;
    participant.lastName = parentLastName;
    participant.phoneNumber = parentPhoneNumber;
    participant.email = parentEmail;
    participant.address = address;
    participant.city = city;
    participant.zipcode = zipCode;
    participant.signature = parentSignature;
    participant.participateAs = ParticipateType.Parents;

    return await this.createParticipant(participant);
  }

  private async createParticipant(participant: Participant) {
    return await this.participantRepository.save(participant).then();
  }

  private async createRegistration(
    registerUserDto: RegisterUserDto,
    parentId: string,
  ) {
    const { payPlan, signDate, homeChurch } = registerUserDto;
    const registration = new Registration();
    registration.parentId = parentId;
    registration.payPlan = payPlan;
    registration.homeChurch = homeChurch;
    registration.signDate = signDate;

    return await this.registrationRepository.save(registration).then();
  }
}
