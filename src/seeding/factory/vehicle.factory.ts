import { Vehicle } from '../../vehicle/entities/vehicle.entity';
import { setSeederFactory } from 'typeorm-extension';
import { VehicleStatus } from '../../vehicle/types/vehicle.type';
import { Faker } from '@faker-js/faker';

export const vehicleFactory = setSeederFactory(Vehicle, (faker: Faker) => {
  const vehicle = new Vehicle();

  vehicle.name = faker.lorem.word(1);
  vehicle.brand = faker.vehicle.manufacturer();
  vehicle.model = faker.vehicle.model();
  vehicle.mileage = faker.number.int({ min: 0, max: 300_000 });
  vehicle.description = faker.lorem.sentence();
  vehicle.modelYear = faker.number.int({
    min: 1995,
    max: new Date().getFullYear(),
  });
  vehicle.price = Number(
    faker.number.float({ min: 1000, max: 100000, fractionDigits: 2 }),
  );
  vehicle.status = faker.helpers.arrayElement([
    VehicleStatus.AVAILABLE,
    VehicleStatus.SOLD,
    VehicleStatus.MAINTENANCE,
  ]);

  return vehicle;
});
