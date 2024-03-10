import { FC } from "react";
import { TCarQuery } from "../../../routes/cars";
import { carArray } from "../cars";
import { Card } from "../../../components/Card";
import { Typography } from "../../../shared/ui/Typography";
import { Link } from "@tanstack/react-router";
import { Button } from "../../../shared/ui/Button";

export const Cars: FC<TCarQuery> = function Cars(props) {
  const carList = carArray
    .filter((car) => {
      return (
        car.color.toLowerCase() ==
          (props.color?.toLowerCase() ?? car.color.toLowerCase()) &&
        car.year >= (props.yearfrom ?? car.year) &&
        car.year <= (props.yearto ?? car.year) &&
        car.price >= (props.from ?? car.price) &&
        car.price <= (props.to ?? car.price)
      );
    })
    .map((car) => (
      <li key={car.id}>
        <Card>
          <Typography>
            <div className="text-bold">
              Машина: {car.brand} {car.model}
            </div>
            Цена: {car.price} $
          </Typography>
          <Link to="/cars/$carID" params={{ carID: car.id }}>
            <Button mode="dark">{"Детали"}</Button>
          </Link>
        </Card>
      </li>
    ));
    
  return (
    <>
      <ul>{carList}</ul>
    </>
  );
};
