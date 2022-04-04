import '../styles/globals.css';
import type { AppProps } from 'next/app';

import Head from 'next/head';
import Navbar from '../src/components/Navbar/Navbar';

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3rem;
  margin: 0 0 1rem;

  @media (min-width: 768px) {
    font-size: 8rem;
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  padding: 1rem;
  position: relative;

  @media (min-width: 768px) {
    padding: 2rem;
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
