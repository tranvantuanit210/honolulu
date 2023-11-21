import { ParticipantTable } from 'src/infrastructures/schema/participant.table';

export class Registration {
  id: string;
  payPlan: string;
  homeChurch: string;
  signDate: Date;
  parentId: string;
  parent: ParticipantTable;
  createdAt: Date;
  updatedAt: Date;
}
