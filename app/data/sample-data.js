import { v4 as uuidv4 } from 'uuid'

export const vehicles = [
  {
    id: uuidv4(),
    brand: 'Toyota',
    subBrand: 'Avanza',
    year: 2024,
    passengers: 7,
    millage: 10000,
  },
  {
    id: uuidv4(),
    brand: 'VolksWagen',
    subBrand: 'Crafter',
    year: 2022,
    passengers: 20,
    millage: 30000,
  },
]

export const cities = [
  {
    id: uuidv4(),
    name: 'Guadalajara',
    abbreviation: 'GDL',
  },
  {
    id: uuidv4(),
    name: 'Ciudad de México',
    abbreviation: 'CDMX',
  },
]
