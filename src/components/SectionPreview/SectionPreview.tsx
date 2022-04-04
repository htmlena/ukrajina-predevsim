import { FC } from 'react';
import styled, { css } from 'styled-components';
import { mq } from '../../utils/styles';

type SectionPreviewProps = {
  title: string;
  // image: string;
  isImageLeft?: boolean;
  background: string;
};

const Container = styled.div<{ isImageLeft?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${({ isImageLeft }) =>
    isImageLeft &&
    css`
      flex-direction: row-reverse;
    `}
  ${mq.small.css`
 `}
`;

const Title = styled.h2`
  color: blue;
  padding: 9rem 6rem;
  background-color: #ffff55;
  margin: 0;
  flex-basis: 20%;
  ${mq.small.css`
    padding: 4rem 1rem;
 `}
`;

const ImageContainer = styled.div`
  width: 100%;
  flex-basis: 80%;
`;

const ImageDiv = styled.div<{ background: string }>`
  // background: url(/tanya-pro-La4-bd_9UJ8-unsplash.jpg) no-repeat top center;
  background: ${(props) => `url(${props.background}) no-repeat top center`};
  background-size: cover;
  height: 100%;
`;

const SectionPreview: FC<SectionPreviewProps> = ({
  title,
  // image,
  isImageLeft,
  background,
}) => {
  return (
    <Container isImageLeft={isImageLeft}>
      <Title>{title}</Title>
      <ImageContainer>
        <ImageDiv background={background}></ImageDiv>
        {/* <Image src={image} width="350px" height="300px" alt="Hero image" /> */}
      </ImageContainer>
    </Container>
  );
};

export default SectionPreview;
