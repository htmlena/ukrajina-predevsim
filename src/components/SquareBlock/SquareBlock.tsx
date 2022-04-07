import { FC } from 'react';
import styled, { css } from 'styled-components';
import { mq } from '../../utils/styles';

const SquareContainer = styled.div`
  background-color: #fec9e5;
  color: #3a6ba4;
  width: 100%;
`;

const SquareTitle = styled.h2`
  font-size: 1.8rem;
  ${mq.mediumUp.css`
  font-size: 4rem;
 `}
`;

const SquareContent = styled.div``;

type SquareBlockProps = {
  title: string;
};

const SquareBlock: FC<SquareBlockProps> = ({ title }) => {
  return (
    <SquareContainer>
      <SquareContent>
        <SquareTitle>{title}</SquareTitle>
      </SquareContent>
    </SquareContainer>
  );
};

export default SquareBlock;
