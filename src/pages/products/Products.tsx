import { FC } from "react";
import { products } from "./model/Product";
import { Typography } from "../../shared/ui/Typography";
import { Card } from "../../components/Card";
import { Link } from "@tanstack/react-router";
import { Button } from "../../shared/ui/Button";
import { TProductQuery } from "../../routes/products";

export const Products: FC<TProductQuery> = function Products(props) {
  const list = products
    .filter(
      (prod) =>
        prod.price >= (props.from ?? prod.price) &&
        prod.price <= (props.to ?? prod.price)
    )
    .map((product) => (
      <li key={product.id.toString()}>
        <Card>
          <Typography size={20} align="center">
            {product.name}
          </Typography>
          <Link
            to="/products/$productID"
            params={{ productID: product.id.toString() }}
          >
            <Button mode="dark">{"Go to"}</Button>
          </Link>
        </Card>
      </li>
    ));
  return (
    <>
      <ul>{list}</ul>
    </>
  );
};
