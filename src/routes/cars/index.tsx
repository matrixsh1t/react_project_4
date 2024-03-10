import { createFileRoute } from "@tanstack/react-router"
import { Cars } from "../../pages/cars/Cars"

export type TCarQuery = {
    color?: string,
    yearfrom?: number,
    yearto?: number
    from?: number,
    to?: number,
}

export const Route = createFileRoute("/cars/") ({
    component: CarRoute
})

function CarRoute() {
    const query = Route.useSearch<TCarQuery>()
    
    return <Cars {...query} />
}