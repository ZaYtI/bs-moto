import { Vehicle } from '../vehicle/entities/vehicle.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export class MainSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const vehicleFactory = factoryManager.get(Vehicle);

    await vehicleFactory.saveMany(10);
  }
}
