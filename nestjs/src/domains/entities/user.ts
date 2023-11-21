export class User {
  id: number;
  parentFirstName: string;
  parentLastName: string;
  parentPhoneNumber: string;
  parentEmail: string;
  address: string;
  city: string;
  zipCode: string;

  student1FirstName: string;
  student1Age: number;
  student1BirthDate: Date;
  student1PhoneNumber?: string;
  student1Email: string;
  student1ParticipateType: string[];

  student2FirstName?: string;
  student2Age?: number;
  student2BirthDate?: Date;
  student2PhoneNumber?: string;
  student2Email?: string;
  student2ParticipateType?: string[];

  student3FirstName?: string;
  student3Age?: number;
  student3BirthDate?: Date;
  student3PhoneNumber?: string;
  student3Email?: string;
  student3ParticipateType?: string[];

  student4FirstName?: string;
  student4Age?: number;
  student4BirthDate?: Date;
  student4PhoneNumber?: string;
  student4Email?: string;
  student4ParticipateType?: string[];

  student5FirstName?: string;
  student5Age?: number;
  student5BirthDate?: Date;
  student5PhoneNumber?: string;
  student5Email?: string;
  student5ParticipateType?: string[];

  homeChurch: string;
  student1Signature: string;
  student2Signature?: string;
  student3Signature?: string;
  student4Signature?: string;
  student5Signature?: string;
  parentSignature: string;
  signDate: Date;
  payPlan: string;

  created_at: Date;
  updated_at: Date;
}
