export const VehicleStatus = {
  AVAILABLE: 'available',
  RESERVED: 'reserved',
  SOLD: 'sold',
  MAINTENANCE: 'maintenance',
  UNAVAILABLE: 'unavailable',
} as const;

export type VehicleStatus = (typeof VehicleStatus)[keyof typeof VehicleStatus];
