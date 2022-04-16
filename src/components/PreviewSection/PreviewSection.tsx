import { FC } from 'react';
import styled from 'styled-components';

const PreviewSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PreviewImage = styled.div`
  background: no-repeat center/100%
    url('artur-zhadan-wv7GyOu66r8-unsplash.webp');
  position: relative;
  width: 330px;
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
};

const PreviewTitle = styled.div`
  font-weight: 600;
  border-bottom: 2px solid black;
  padding: 0.6rem;
  margin-bottom: 2rem;
`;

export const PreviewSection: FC<PreviewTitleProps> = ({ title }) => {
  return (
    <PreviewSectionContainer>
      <PreviewImage>
        <PreviewOverlay />
      </PreviewImage>
      <PreviewTitle>{title}</PreviewTitle>
    </PreviewSectionContainer>
  );
};
