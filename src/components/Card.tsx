import { FC, HTMLAttributes } from "react";
import { COLORS_BG } from "../shared/ui/colors";

export const Card: FC<HTMLAttributes<HTMLDivElement>> = function Card(props) {
  return (
    <>
      <div
        className={`${COLORS_BG.main300} max-w-80 mx-auto p-4 mt-4 rounded-lg  ${props.children}`}
      >
        {props.children}
      </div>
    </>
  );
};
