import { Registration } from './registration';

export class Participant {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  zipcode: string;
  birthDate: Date;
  signature: string;
  participateAs: string;
  participateType: string;
  createdAt: Date;
  updatedAt: Date;

  registrations: Registration[];
}
