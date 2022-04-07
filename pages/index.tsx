import SquareBlock from '../src/components/SquareBlock/SquareBlock';
import styled from 'styled-components';
import { mq } from '../src/utils/styles';

const Home = () => {
  const TopSectionContainer = styled.section`
    // display: flex;
    // flex-direction: column;
    display: grid;
    padding: 0 1.2rem;

    ${mq.mediumUp.css`
  // flex-direction: row;
   grid-template-columns: 2fr 1fr 1fr;
    column-gap: 1rem;
    padding: 0 3rem;
 `}

    ${mq.xlarge.css`
      padding: 0;
 `}
  `;

  return (
    <>
      <TopSectionContainer>
        <SquareBlock title="Jazyk" />
        <SquareBlock title="Umění" />
        <SquareBlock title="Hudba" />
      </TopSectionContainer>
    </>
  );
};

export default Home;
