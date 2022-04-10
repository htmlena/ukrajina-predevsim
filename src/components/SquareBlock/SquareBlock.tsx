import {
  SquareContainer,
  SquareTitle,
  SquareContent,
  ShortDescription,
} from './SquareBlockStyles';
import { FC } from 'react';

type SquareBlockProps = {
  title: string;
  shortDescription?: string;
  cardColor: string;
  cardTextColor: string;
};

const SquareBlock: FC<SquareBlockProps> = ({
  title,
  shortDescription,
  cardColor,
  cardTextColor,
}) => {
  return (
    <SquareContainer cardColor={cardColor} cardTextColor={cardTextColor}>
      <SquareContent>
        <SquareTitle>{title}</SquareTitle>
        <ShortDescription>{shortDescription}</ShortDescription>
      </SquareContent>
    </SquareContainer>
  );
};

export default SquareBlock;
