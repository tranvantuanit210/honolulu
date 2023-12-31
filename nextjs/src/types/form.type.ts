export interface DataFormST1 {
  student1FirstName: string | null;
  student1Age: number | null;
  student1BirthDate: string | null;
  student1PhoneNumber: string | null;
  student1Email: string | null;
  student1ParticipateType: string[] | null;
  anotherStudent1: string | null;
}
export interface DataFormST2 {
  student2FirstName: string | null;
  student2Age: number | null;
  student2BirthDate: string | null;
  student2PhoneNumber: string | null;
  student2Email: string | null;
  student2ParticipateType: string[] | null;
  anotherStudent2: string | null;
}
export interface DataFormST3 {
  student3FirstName: string | null;
  student3Age: number | null;
  student3BirthDate: string | null;
  student3PhoneNumber: string | null;
  student3Email: string | null;
  student3ParticipateType: string[] | null;
  anotherStudent3: string | null;
}
export interface DataFormST4 {
  student4FirstName: string | null;
  student4Age: number | null;
  student4BirthDate: string | null;
  student4PhoneNumber: string | null;
  student4Email: string | null;
  student4ParticipateType: string[] | null;
  anotherStudent4: string | null;
}
export interface DataFormST5 {
  student5FirstName: string | null;
  student5Age: number | null;
  student5BirthDate: string | null;
  student5PhoneNumber: string | null;
  student5Email: string | null;
  student5ParticipateType: string[] | null;
}

export interface DataForm extends DataFormST1, DataFormST2, DataFormST3, DataFormST4, DataFormST5 {
  parentFirstName: string | null;
  parentLastName: string | null;
  parentPhoneNumber: string | null;
  parentEmail: string | null;
  address: string | null;
  city: string | null;
  zipCode: string | null;
  homeChurch: string | null;
  agree: string | null;
  student1Signature: string | null;
  student2Signature: string | null;
  student3Signature: string | null;
  student4Signature: string | null;
  student5Signature: string | null;
  parentSignature: string | null;
  signDate: string | null;
  payPlan: string | null;
}
