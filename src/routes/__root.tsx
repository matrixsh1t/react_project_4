import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
    component: () => (
        <>
        <div className="p-2 flex gap-2">
            <Link to="/" className="[&.active]:font-bold">
            {"Главная"}
            </Link>
            <Link to="/about" className="[&.active]:font-bold">
            {"about"}
            </Link>
            <Link to="/products" className="[&.active]:font-bold">
            {"Products"}
            </Link>
            <Link to="/cars" className="[&.active]:font-bold">
            {"Cars"}
            </Link>
        </div>

    
        <Outlet />
        <TanStackRouterDevtools />
        </>
    )
})