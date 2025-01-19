export class CreateMemberDto {
  username: string;
  payout: number;
  lastPayoutDue: Date;
  dateJoined: Date;
  totalLootSplit: number;
  totalRegearCost: number;
}
