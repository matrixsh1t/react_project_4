import { FC, HTMLAttributes } from "react";
import { COLORS_TEXT } from "./colors";

type TEXT_SIZE = 24 | 20 | 18 | 16 | 14 | 12;
type TEXT_WEIGHT = 400 | 500 | 600 | 700;
type TEXT_ALIGN = "left" | "center" | "right"

const STYLE_SIZE = {
  24: "text-2xl",
  20: "text-xl",
  18: "text-lg",
  16: "text-base",
  14: "text-sm",
  12: "text-xs"
}

const STYLE_WEIGHT = {
  700: "font-bold",
  600: "font-semibold",
  500: "font-medium",
  400: "font-normal"
}

const STYLE_ALIGN = {
  left: "text-left",
  center: "text-center",
  right: "text-right"
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  size?: TEXT_SIZE;
  weight?: TEXT_WEIGHT;
  color?: string;
  align?: TEXT_ALIGN;
}

export const Typography: FC<Props> = function Typography(props) {
  const {
    size = 16,
    weight = 400,
    color = COLORS_TEXT.primary,
    align = "left",
    ...rest
  } = props;

  return (
    <>
      <div
        {...rest}
        className={`${STYLE_SIZE[size]} ${STYLE_WEIGHT[weight]} ${STYLE_ALIGN[align]} ${color} ${props.className}`}
      >
        {props.children}
      </div>
    </>
  );
};

