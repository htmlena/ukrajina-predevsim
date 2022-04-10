import styled from 'styled-components';
import { mq } from '../../utils/styles';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  text-align: center;
  ${mq.mediumUp.css`
      padding: 0 3rem;
       width: 70%;
 `}
`;

export const Title = styled.h2`
  ${mq.mediumUp.css`
      font-size: 2.8rem;
 `}
`;

export const Subtitle = styled.p`
  ${mq.mediumUp.css`
      font-size: 1.8rem;
 `}
`;

export const ContentContainer = styled.div`
  padding: 0 2rem;
  ${mq.mediumUp.css`
      width: 70%;
      padding: 0 3rem;
 `}
`;

export const Paragraph = styled.p`
  font-weight: 600;
  font-size: 1.6rem;
`;
