// pages/api/todos/create.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { Vehicle } from '../../models/vehicle'

const createVehicleHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Vehicle>
) => {
  if (req.method === 'POST') {
    // Recibe los datos del nuevo todo desde el cuerpo de la solicitud
    const { name, passengers, color } = req.body

    // Valida que se proporcionen los datos necesarios
    if (!name || !passengers || !color) {
      return res.status(400).json({
        error: 'Se requieren título y descripción para crear un nuevo todo.',
      })
    }

    // Crea un nuevo todo
    const newVehicle: Vehicle = {
      id: Date.now().toString(),
      name,
      passengers,
      color,
    }

    // Simula el almacenamiento en una base de datos
    // Aquí deberías integrar tu lógica para almacenar el todo en tu base de datos
    // Por ejemplo, podrías usar una base de datos como MongoDB o guardar en un archivo JSON
    // En este ejemplo, simplemente agregamos el nuevo todo a un array simulando una base de datos
    todos.push(newVehicle)

    // Devuelve el nuevo todo como respuesta
    return res.status(201).json(newVehicle)
  } else {
    // Devuelve un error si la solicitud no es de tipo POST
    return res.status(405).json({
      error: 'Método no permitido. Utiliza POST para crear un nuevo todo.',
    })
  }
}

export default createVehicleHandler
