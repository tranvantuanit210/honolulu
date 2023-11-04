import { DataForm } from "@/types/form.type";

export const initFormValue: DataForm = {
  parentFirstName: null,
  parentLastName: null,
  parentPhoneNumber: null,
  parentEmail: null,
  address: null,
  city: null,
  zipCode: null,

  student1FirstName: null,
  student1Age: null,
  student1BirthDate: null,
  student1PhoneNumber: null,
  student1Email: null,
  student1ParticipateType: null,
  anotherStudent1: null,

  student2FirstName: null,
  student2Age: null,
  student2BirthDate: null,
  student2PhoneNumber: null,
  student2Email: null,
  student2ParticipateType: null,
  anotherStudent2: null,

  student3FirstName: null,
  student3Age: null,
  student3BirthDate: null,
  student3PhoneNumber: null,
  student3Email: null,
  student3ParticipateType: null,
  anotherStudent3: null,

  student4FirstName: null,
  student4Age: null,
  student4BirthDate: null,
  student4PhoneNumber: null,
  student4Email: null,
  student4ParticipateType: null,
  anotherStudent4: null,

  student5FirstName: null,
  student5Age: null,
  student5BirthDate: null,
  student5PhoneNumber: null,
  student5Email: null,
  student5ParticipateType: null,

  homeChurch: null,
  agree: null,
  student1Signature: null,
  student2Signature: null,
  student3Signature: null,
  student4Signature: null,
  student5Signature: null,
  parentSignature: null,
  signDate: null,
  payPlan: null,
};

export const optionsPayPlan = [
  {
    label: "Mail in a check payable to “Honolulu Speech and Debate” - mailing address -- Michael Higashi at 743 Ainapo St., Honolulu, HI 96825",
    value: "Mail in a check payable to “Honolulu Speech and Debate” - mailing address -- Michael Higashi at 743 Ainapo St., Honolulu, HI 96825",
  },
  {
    label: "Bring a check payable to 'Honolulu Speech and Debate' to the first day of club.",
    value: "Bring a check payable to 'Honolulu Speech and Debate' to the first day of club.",
  },
];

export const optionsParticipateType = [
  { label: "Speech", value: "Speech" },
  { label: "Debate", value: "Debate" },
];
export const optionsAnotherStudent = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
];
