import '../styles/globals.css';
import Link from 'next/link';
import type { AppProps } from 'next/app';
import { mq } from '../src/utils/styles';

import Head from 'next/head';
import Navbar from '../src/components/Navbar/Navbar';

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1rem;
  margin: 0;
  // @media (min-width: 768px) {
  //   font-size: 5rem;
  // }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const DotsContainer = styled.div`
  display: flex;
`;

const DotBlue = styled.div`
  // position: absolute;
  // top: 38px;
  // right: 128px;
  width: 15px;
  height: 15px;
  background-color: #0057b8;
  border-radius: 50%;
  margin-right: 0.2rem;
`;

const DotYellow = styled.div`
  width: 15px;
  height: 15px;
  background-color: #ffd700;
  border-radius: 50%;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  padding: 0.8rem 1rem;
  position: relative;

  @media (min-width: 768px) {
    padding: 2rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${mq.xlarge.css`
  width: 70%;
  margin: 0 auto;
 `}
`;

const Intro = styled.div`
  background-color: #a2a2a2;
  padding: 0.8rem 1rem;

  @media (min-width: 768px) {
    padding: 1rem 3rem;
  }
`;

const Main = styled.main`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  // padding: 0 1rem 1rem;

  @media (min-width: 768px) {
    // padding: 0 2rem 2rem;
  }
`;

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mq.xlarge.css`
  width: 70%;
  margin: 0 auto;
 `}
`;

const Footer = styled.footer`
  padding: 1rem;
  color: gray;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  ${mq.xlarge.css`
  width: 70%;
  margin: 0 auto;
 `}
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>O Ukrajině</title>
        <meta name="description" content="Pages about Ukrainian culture" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Layout>
        <Header>
          <Link href="/" passHref>
            <LogoContainer>
              <Title>O Ukrajině</Title>

              <DotsContainer>
                <DotBlue />
                <DotYellow />
              </DotsContainer>
            </LogoContainer>
          </Link>
          <Navbar />
        </Header>
        <Main>
          <MainContentContainer>
            {/* <Intro>
              <div>Projekt o ukrajinské kultuře a literatuře</div>
              <div>
                „Ukrajinské umění bylo vždy víc aktivistické, občanské,
                promlouvalo o tom, co se kolem nás děje.“ Poznejte ukrajinskou
                kulturu ještě lépe. Zdroj:
                https://www.lidovky.cz/domov/cesko-ukrajina-ukrajinci-kultura-krtecek-uprchlici-bezenci.A220325_145052_ln_domov_lros
              </div>
            </Intro> */}
            <Component {...pageProps} />
          </MainContentContainer>
        </Main>
        <Footer>
          <div>© 2022 Projekt o ukrajinské kultuře</div>
        </Footer>
      </Layout>
    </>
  );
}

export default MyApp;
