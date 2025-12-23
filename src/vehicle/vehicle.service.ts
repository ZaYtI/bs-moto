import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle)
    private readonly repo: Repository<Vehicle>,
  ) {}

  async findAll(): Promise<Vehicle[]> {
    return await this.repo.find();
  }

  async findOne(id: number): Promise<Vehicle> {
    return await this.repo.findOneByOrFail({ id });
  }

  async create(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    return await this.repo.save(createVehicleDto);
  }

  async update(
    id: number,
    updateVehicleDto: UpdateVehicleDto,
  ): Promise<Vehicle> {
    const vehicle = await this.findOne(id);
    Object.assign(vehicle, updateVehicleDto);
    return await this.repo.save(vehicle);
  }

  async remove(id: number): Promise<void> {
    const vehicle = await this.findOne(id);
    await this.repo.delete(vehicle.id);
  }
}
