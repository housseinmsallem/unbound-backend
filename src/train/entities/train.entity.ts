import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('train')
export class Train {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  trainName: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  tunis: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  saiidaManoubia: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  mellassine: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  erraoudha: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  leBardo: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  elBortal: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  manouba: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  lesOrangers: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  gobaa: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  gobaaVille: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  direction: string;
}
