import { FC } from 'react';
import styled from 'styled-components';

const PreviewSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PreviewImage = styled.div<{ image: string }>`
  background: ${(props) => `url(${props.image}) no-repeat center/cover`};
  position: relative;
  height: 220px;
`;

const PreviewOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  opacity: 0.3;
`;

type PreviewTitleProps = {
  title: string;
  image: string;
};

const PreviewTitle = styled.div`
  font-weight: 600;
  border-bottom: 2px solid black;
  padding: 0.6rem;
`;

export const PreviewSection: FC<PreviewTitleProps> = ({ title, image }) => {
  return (
    <PreviewSectionContainer>
      <PreviewImage image={image}>
        <PreviewOverlay />
      </PreviewImage>
      <PreviewTitle>{title}</PreviewTitle>
    </PreviewSectionContainer>
  );
};
