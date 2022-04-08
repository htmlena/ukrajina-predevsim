import { FC } from 'react';
import styled, { css } from 'styled-components';
import { mq } from '../../utils/styles';

const SquareContainer = styled.div<{
  cardColor: string;
  cardTextColor: string;
}>`
  background-color: ${(props) => props.cardColor};
  color: ${(props) => props.cardTextColor};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SquareTitle = styled.h2`
  font-size: 1.8rem;
  min-height: 6rem;
  ${mq.mediumUp.css`
  font-size: 3rem;
  min-height: 6rem;
 `}
`;

const SquareContent = styled.div`
  padding: 1rem;
  ${mq.mediumUp.css`
  padding: 2rem;
 `}
`;

const ShortDescription = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  ${mq.mediumUp.css`
  font-size: 1rem;
 `}
`;

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
