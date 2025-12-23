import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { VehicleStatus } from '../types/vehicle.type';

@Entity('vehicles')
export class Vehicle extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @Column({
    name: 'name',
  })
  name: string;

  @Column({
    name: 'brand',
  })
  brand: string;

  @Column({
    name: 'model',
  })
  model: string;

  @Column({
    name: 'mileage',
  })
  mileage: number;

  @Column({
    name: 'description',
    nullable: true,
  })
  description: string;

  @Column({
    name: 'model_year',
  })
  modelYear: number;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({
    name: 'status',
    type: 'enum',
    enum: VehicleStatus,
    default: VehicleStatus.AVAILABLE,
  })
  status: VehicleStatus;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;
}
