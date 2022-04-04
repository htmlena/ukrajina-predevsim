import '../styles/globals.css';
import type { AppProps } from 'next/app';

import Head from 'next/head';
import Navbar from '../src/components/Navbar/Navbar';

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3rem;
  margin: 0 0 1rem;

  @media (min-width: 768px) {
    font-size: 5rem;
  }
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
    padding: 1rem 3rem;
  }
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

const Footer = styled.footer`
  padding: 1rem;
  color: gray;

  @media (min-width: 768px) {
    padding: 2rem;
  }
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
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Layout>
        <Header>
          <Title>O Ukrajině</Title>
          <Navbar />
        </Header>
        <Main>
          <Intro>
            <div>Projekt o ukrajinské kultuře a literatuře</div>
            <div>
              „Ukrajinské umění bylo vždy víc aktivistické, občanské,
              promlouvalo o tom, co se kolem nás děje.“ Poznejte ukrajinskou
              kulturu ještě lépe.
              {/* Zdroj:
            https://www.lidovky.cz/domov/cesko-ukrajina-ukrajinci-kultura-krtecek-uprchlici-bezenci.A220325_145052_ln_domov_lros */}
            </div>
          </Intro>
          <Component {...pageProps} />
        </Main>
        <Footer>
          <div>© 2022 Projekt o ukrajinské kultuře</div>
        </Footer>
      </Layout>
    </>
  );
}

export default MyApp;
