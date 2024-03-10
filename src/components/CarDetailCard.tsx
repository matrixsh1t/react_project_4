import  { FC, HTMLAttributes } from 'react';
import { COLORS_BG } from '../shared/ui/colors';


export const CarDetailCard: FC<HTMLAttributes<HTMLDivElement>> = function CarDetailCard(props) {
  return (<> 
    <div
        className={`${COLORS_BG.secondary100} max-w-80 mx-auto p-4 mt-4 rounded-lg  ${props.children}`}
      >
        {props.children}
      </div>
</>)
};