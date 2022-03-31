import { FC } from 'react';
import styled, { css } from 'styled-components';
import { mq } from '../../utils/styles';

import Image from 'next/image';

type SectionPreviewProps = {
  title: string;
  isImageLeft?: boolean;
};

const Container = styled.div<{ isImageLeft?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid black;
  padding: 6rem;
  ${({ isImageLeft }) =>
    isImageLeft &&
    css`
      flex-direction: row-reverse;
    `}
  ${mq.small.css`
  padding: 1rem;
 `}
`;

const Title = styled.h2`
  color: blue;
`;

const SectionPreview: FC<SectionPreviewProps> = ({ title, isImageLeft }) => {
  return (
    <Container isImageLeft={isImageLeft}>
      <Title>{title}</Title>
      <Image src="/cover.png" width="350px" height="300px" alt="Hero image" />
    </Container>
  );
};

export default SectionPreview;
