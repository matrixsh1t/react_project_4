// import { useParams } from "@tanstack/react-router";
import { FC } from "react";
import { products } from "./model/Product";
import { Typography } from "../../shared/ui/Typography";

// ---BAD CODE---
// export const Product: FC = function Product() {
//   const { productID } = useParams({ from: "/products/$productID" });
//   const product = products.find((prod) => prod.id === Number(productID));

//   return (
//     <>
//       <Typography>{product ? product.name : "Товар не найден"}</Typography>
//     </>
//   );
// };

interface Props {
  id: number;
}

export const Product: FC<Props> = function Product(props) {
  const product = products.find((prod) => prod.id === props.id);

  return (
    <>
      <Typography>{product ? product.name : "Товар не найден"}</Typography>
    </>
  );
};
