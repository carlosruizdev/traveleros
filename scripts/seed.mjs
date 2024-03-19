import { db } from '@vercel/postgres'
import { vehicles, cities } from '../app/data/sample-data.mjs'

async function seedVehicles(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
    // Create the "vehicles" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS vehicles (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        brand VARCHAR(255) NOT NULL,
        subBrand VARCHAR(255) NOT NULL,
        year VARCHAR(4) NOT NULL,
        passengers VARCHAR(255) NOT NULL
      );
    `

    console.log(`Created "vehicles" table`)

    // Insert data into the "vehicles" table
    const insertedVehicles = await Promise.all(
      vehicles.map(async (vehicle) => {
        return client.sql`
        INSERT INTO vehicles (id, brand, sub_brand, year, passengers, millage)
        VALUES (${vehicle.id}, ${vehicle.brand}, ${vehicle.subBrand}, ${vehicle.year}, ${vehicle.passengers}, ${vehicle.millage})
        ON CONFLICT (id) DO NOTHING;
      `
      })
    )

    console.log(`Seeded ${insertedVehicles.length} vehicles`)

    return {
      createTable,
      vehicles: insertedVehicles,
    }
  } catch (error) {
    console.error('Error seeding vehicles:', error)
    throw error
  }
}

async function seedCities(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    // Create the "travels" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS cities (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        abbreviation VARCHAR(255) NOT NULL
      );
    `
    console.log(`Created "cities" table`)

    // Insert data into the "cities" table
    const insertedCities = await Promise.all(
      cities.map(
        (city) => client.sql`
          INSERT INTO cities (name, abbreviation)
          VALUES (${city.name}, ${city.abbreviation})
          ON CONFLICT (id) DO NOTHING;
        `
      )
    )

    console.log(`Seeded ${insertedCities.length} cities`)

    return {
      createTable,
      cities: insertedCities,
    }
  } catch (error) {
    console.error('Error seeding cities:', error)
    throw error
  }
}

async function seedTravels(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    // Create the "travels" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS travels (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    origin UUID NOT NULL,
    destination UUID NOT NULL,
    vehicle UUID NOT NULL,
    price INT NOT NULL
  );
`

    console.log(`Created "travels" table`)

    return {
      createTable,
    }
  } catch (error) {
    console.error('Error seeding travels:', error)
    throw error
  }
}

async function main() {
  const client = await db.connect()

  await seedVehicles(client)
  await seedCities(client)
  await seedTravels(client)

  await client.end()
}

main().catch((err) => {
  console.error('An error occurred while attempting to seed the database:', err)
})
