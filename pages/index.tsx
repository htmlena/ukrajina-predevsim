// import type { NextPage } from 'next'
import SectionPreview from '../src/components/SectionPreview/SectionPreview';

// const DotBlue = styled.div`
//   position: absolute;
//   top: 38px;
//   right: 128px;
//   width: 13px;
//   height: 13px;
//   background-color: blue;
//   border-radius: 50%;
// `;

// const DotYellow = styled.div`
//   width: 15px;
//   height: 15px;
//   background-color: blue;
//   border-radius: 50%;
// `;

const Home = () => {
  return (
    <>
      <SectionPreview title="Literatura" />
      <SectionPreview title="Hudba" isImageLeft />
      <SectionPreview title="Umění" />
      <SectionPreview title="Jazyk" isImageLeft />
    </>
  );
};

export default Home;
