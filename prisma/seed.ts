import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create locations
  const headquarters = await prisma.location.create({
    data: {
      name: 'Headquarters',
      type: 'HEADQUARTERS',
      address: 'Jl. Sudirman No. 123, Jakarta Pusat',
      coordinates: '-6.208763,106.845599',
    },
  })

  const branch = await prisma.location.create({
    data: {
      name: 'Branch Office Surabaya',
      type: 'BRANCH',
      address: 'Jl. Pemuda No. 45, Surabaya',
      coordinates: '-7.250445,112.768845',
    },
  })

  const mineSite1 = await prisma.location.create({
    data: {
      name: 'Mine Site Alpha',
      type: 'MINE_SITE',
      address: 'Kawasan Tambang Alpha, Sulawesi Tengah',
      coordinates: '-1.430847,121.445618',
    },
  })

  // Create users
  const admin = await prisma.user.create({
    data: {
      email: 'admin@vehiclefleet.com',
      role: 'ADMIN',
      employee_id: 'EMP001',
      full_name: 'Admin User',
      department: 'Fleet Management',
      location_id: headquarters.id,
    },
  })

  const manager = await prisma.user.create({
    data: {
      email: 'manager@vehiclefleet.com',
      role: 'APPROVER',
      employee_id: 'EMP002',
      full_name: 'John Manager',
      department: 'Operations',
      location_id: headquarters.id,
    },
  })

  const supervisor = await prisma.user.create({
    data: {
      email: 'supervisor@vehiclefleet.com',
      role: 'APPROVER',
      employee_id: 'EMP003',
      full_name: 'Jane Supervisor',
      department: 'Operations',
      location_id: headquarters.id,
      supervisor_id: manager.id,
    },
  })

  const employee = await prisma.user.create({
    data: {
      email: 'employee@vehiclefleet.com',
      role: 'EMPLOYEE',
      employee_id: 'EMP004',
      full_name: 'Bob Employee',
      department: 'Mining Operations',
      location_id: mineSite1.id,
      supervisor_id: supervisor.id,
    },
  })

  // Create drivers
  const driver1 = await prisma.driver.create({
    data: {
      employee_id: 'DRV001',
      full_name: 'Ahmad Driver',
      license_number: 'A12345678',
      phone: '+62812345678',
      location_id: headquarters.id,
      status: 'AVAILABLE',
    },
  })

  const driver2 = await prisma.driver.create({
    data: {
      employee_id: 'DRV002',
      full_name: 'Budi Sopir',
      license_number: 'B87654321',
      phone: '+62813456789',
      location_id: mineSite1.id,
      status: 'AVAILABLE',
    },
  })

  // Create vehicles
  const vehicle1 = await prisma.vehicle.create({
    data: {
      license_plate: 'B 1234 XYZ',
      brand: 'Toyota',
      model: 'Hiace',
      year: 2022,
      type: 'PASSENGER',
      ownership: 'OWNED',
      location_id: headquarters.id,
      fuel_type: 'Diesel',
      capacity: 15,
      status: 'AVAILABLE',
    },
  })

  const vehicle2 = await prisma.vehicle.create({
    data: {
      license_plate: 'DT 5678 ABC',
      brand: 'Mitsubishi',
      model: 'Canter',
      year: 2021,
      type: 'CARGO',
      ownership: 'OWNED',
      location_id: mineSite1.id,
      fuel_type: 'Diesel',
      capacity: 3000,
      status: 'AVAILABLE',
    },
  })

  const vehicle3 = await prisma.vehicle.create({
    data: {
      license_plate: 'B 9999 RNT',
      brand: 'Isuzu',
      model: 'Elf',
      year: 2020,
      type: 'PASSENGER',
      ownership: 'RENTED',
      location_id: branch.id,
      fuel_type: 'Diesel',
      capacity: 19,
      daily_rate: 500000,
      status: 'AVAILABLE',
    },
  })

  // Create sample booking
  const booking = await prisma.booking.create({
    data: {
      employee_id: employee.id,
      vehicle_id: vehicle1.id,
      purpose: 'Site inspection visit',
      destination: 'Mine Site Alpha',
      start_datetime: new Date('2024-01-15T08:00:00Z'),
      end_datetime: new Date('2024-01-15T17:00:00Z'),
      status: 'PENDING',
      notes: 'Need to inspect new mining equipment',
      created_by: employee.id,
    },
  })

  // Create approval workflow
  await prisma.approval.create({
    data: {
      booking_id: booking.id,
      approver_id: supervisor.id,
      level: 1,
      status: 'PENDING',
    },
  })

  await prisma.approval.create({
    data: {
      booking_id: booking.id,
      approver_id: manager.id,
      level: 2,
      status: 'PENDING',
    },
  })

  // Create maintenance schedule
  await prisma.maintenanceSchedule.create({
    data: {
      vehicle_id: vehicle1.id,
      type: 'SERVICE',
      description: 'Regular maintenance service - oil change, filter replacement',
      scheduled_date: new Date('2024-02-01T09:00:00Z'),
      status: 'SCHEDULED',
    },
  })

  console.log('✅ Database seeded successfully!')
  console.log(`Created:`)
  console.log(`- 3 locations`)
  console.log(`- 4 users`)
  console.log(`- 2 drivers`)
  console.log(`- 3 vehicles`)
  console.log(`- 1 sample booking with approval workflow`)
  console.log(`- 1 maintenance schedule`)
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
