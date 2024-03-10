import { FC } from "react";
import { carArray } from "../cars";
import { CarDetailCard } from "../../../components/CarDetailCard";

interface Props {
  id: string;
}

export const CarDetails: FC<Props> = function CarDetails(props) {
  const carDetail = carArray.find((car) => car.id === props.id);

  return (
    <>
      <div>
        {carDetail ? <CarDetailCard>
            <div className="font-bold text-center text-2xl ">{carDetail.brand} {carDetail.model}</div>
            <div>Год выпуска: {carDetail.year}</div>
            <div>Цвет: {carDetail.color}</div>
            <div>Цена: {carDetail.price} $</div>
            
            
            </CarDetailCard>
             : "Машина не найдена"}
      </div>
    </>
  );
};
