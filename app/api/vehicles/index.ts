// pages/api/todos/index.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { Vehicle } from '../../models/vehicle'

const vehicles: Vehicle[] = [
  { id: '1', name: 'Caravan', passengers: 7, color: 'rojo' },
  { id: '2', name: 'Aveo', passengers: 5, color: 'rojo' },
]

export default function handler(req: NextApiRequest, res: NextApiResponse<Vehicle[]>) {
  res.status(200).json(vehicles)
}
