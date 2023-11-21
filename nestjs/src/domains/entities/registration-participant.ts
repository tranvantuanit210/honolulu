import { Participant } from './participant';
import { Registration } from './registration';

export class RegistrationParticipant {
  id: string;

  registrationId: string;
  registration: Registration;

  studentId: string;
  student: Participant;

  createdAt: Date;
  updatedAt: Date;
}
