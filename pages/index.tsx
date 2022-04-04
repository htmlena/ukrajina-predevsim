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
      <SectionPreview
        title="Literatura"
        background={'/rostislav-artov-Gx5RF9rXVkE-unsplash.webp'}
        // image={'/dalibor-bosnjakovic-Zfg9GZ7yLcU-unsplash.jpg'}
      />
      <SectionPreview
        title="Hudba"
        background={'/tanya-pro-La4-bd_9UJ8-unsplash.webp'}
        // image={'/tanya-pro-La4-bd_9UJ8-unsplash.jpg'}
        isImageLeft
      />
      <SectionPreview
        background={'/artur-zhadan-wv7GyOu66r8-unsplash.webp'}
        // image={'/artur-zhadan-wv7GyOu66r8-unsplash.jpg'}
        title="Umění"
      />
      <SectionPreview
        title="Jazyk"
        background={'/volodymyr-tokar-W6eVy5wy8-M-unsplash.webp'}
        // image={'/volodymyr-tokar-W6eVy5wy8-M-unsplash.jpg'}
        isImageLeft
      />
    </>
  );
};

export default Home;
