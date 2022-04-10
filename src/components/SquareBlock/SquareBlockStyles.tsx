import styled, { css } from 'styled-components';
import { mq } from '../../utils/styles';

export const SquareContainer = styled.a<{
  cardColor: string;
  cardTextColor: string;
}>`
  background-color: ${(props) => props.cardColor};
  color: ${(props) => props.cardTextColor};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mq.xlarge.css`
      min-height: 20rem;
 `}
`;

export const SquareTitle = styled.h2`
  font-size: 1.8rem;
  min-height: 6rem;
  ${mq.mediumUp.css`
  font-size: 3rem;
  min-height: 6rem;
 `}
`;

export const SquareContent = styled.div`
  padding: 1rem;
  ${mq.mediumUp.css`
  padding: 2rem;
 `}
`;

export const ShortDescription = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  ${mq.mediumUp.css`
  font-size: 1rem;
 `}
`;
