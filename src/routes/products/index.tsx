import { createFileRoute } from "@tanstack/react-router";
import { Products } from "../../pages/products/Products";

export type TProductQuery = {
    from?: number,
    to?: number
}

export const Route = createFileRoute("/products/")({
  component: ProductRoute,
});

function ProductRoute() {
    const query = Route.useSearch<TProductQuery>()

    return <Products {...query} />
}