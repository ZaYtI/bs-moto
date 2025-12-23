import 'dotenv/config';
import 'reflect-metadata';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import { DataSource, DataSourceOptions } from 'typeorm';
import { MainSeeder } from './main.seeder';
import { vehicleFactory } from './factory/vehicle.factory';

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT ?? '5432', 10),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  synchronize: true,
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  seeds: [MainSeeder],
  factories: [vehicleFactory],
};

const dataSource = new DataSource(options);

async function seed() {
  try {
    await dataSource.initialize();
    await runSeeders(dataSource);
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

void seed();
