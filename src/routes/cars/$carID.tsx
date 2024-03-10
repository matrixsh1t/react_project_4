import { createFileRoute } from '@tanstack/react-router'
import { CarDetails } from '../../pages/cars/CarDetails'

export const Route = createFileRoute('/cars/$carID')({
  component: CarRoute
})

function CarRoute() {
  const {carID} = Route.useParams()

  return <CarDetails id={(carID)} />
}