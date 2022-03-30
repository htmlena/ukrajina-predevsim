import { FC } from 'react';
import styled from 'styled-components';

import Image from 'next/image';

type SectionPreviewProps = {
  title: string;
};

const Container = styled.div`
  display: flex;
  border: 1px solid black;
  padding: 6rem;
`;

const Title = styled.h2`
  color: blue;
`;

// const SectionImage = (props) => {
//   return (
//     <Image
//       src={
//         'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.figma.com%2Fcommunity%2Ffile%2F941607221092508263&psig=AOvVaw3nrDvRMUbT_wll3CwFtg1N&ust=1648731947218000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNCvjqjz7fYCFQAAAAAdAAAAABAD'
//       }
//       alt="ff"
//       width="350px"
//       height="300px"
//     ></Image>
//   );
// };

const SectionPreview: FC<SectionPreviewProps> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {/* <Image
        src="/public/cover.png"
        width="350px"
        height="300px"
        alt="Hero image"
      /> */}
    </Container>
  );
};

export default SectionPreview;
