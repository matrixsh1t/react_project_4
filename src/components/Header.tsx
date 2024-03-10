import { FC } from "react";


interface Props {
  totalPrice: number;
}

export const Header: FC<Props> = function Header(props) {

  return (
    <>
      <header className={"bg-blue-400 py-3"}>
        <h1 className="text-white">Total Price: {props.totalPrice}</h1>
      </header>
    </>
  );
};
