import { Entity, Column } from 'typeorm';
export class Member {
  @Column()
  username: string;
  @Column()
  payout: number;
  @Column()
  lastPayoutDue: Date;
  @Column()
  dateJoined: Date;
  @Column()
  totalLootSplit: number;
  @Column()
  totalRegearCost: number;
}
