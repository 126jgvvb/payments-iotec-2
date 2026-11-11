import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum WalletOwnerType {
  USER = 'user',
  GROUP = 'group',
}

@Entity('wallets')
export class WalletEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  userId: string;

  @Column({ nullable: true })
  groupId: string;

  @Column({
    type: 'enum',
    enum: WalletOwnerType,
    default: WalletOwnerType.USER,
  })
  ownerType: WalletOwnerType;

  @Column({ nullable: true })
  phone?: string;

  @Column('numeric', { precision: 10, scale: 2 })
  balance: number;

  @Column({ type: 'varchar', length: 3, default: 'UGX' })
  currency: string;

  @Column({ default: false })
  isFrozen: boolean;

  // Reserve wallet fields
  @Column({ default: false })
  isReserve: boolean;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0 })
  targetAmount: number;

  @Column({ default: false })
  isActivated: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
