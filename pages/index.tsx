import SquareBlock from '../src/components/SquareBlock/SquareBlock';
import styled from 'styled-components';
import { mq } from '../src/utils/styles';

const Home = () => {
  const TopSectionContainer = styled.section`
    // display: flex;
    // flex-direction: column;
    display: grid;
    padding: 0 1.2rem;
    row-gap: 1rem;

    ${mq.mediumUp.css`
  // flex-direction: row;
   grid-template-columns: 2fr 1fr 1fr;
   grid-template-rows: 2fr;
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
        <SquareBlock
          title="Ukrajinské umění"
          shortDescription="„Ukrajinské umění bylo vždy víc aktivistické, občanské,
                promlouvalo o tom, co se kolem nás děje.“"
          cardColor="#fec9e5"
          cardTextColor="#3A6BA4"
        />
        <SquareBlock
          title="Ukrajinský jazyk"
          cardColor="#F4E2A3"
          cardTextColor="#A74D4D"
        />
        <SquareBlock
          title="Ukrajinská hudba"
          cardColor="#CBA5FC"
          cardTextColor="#595287"
        />
        <SquareBlock
          title="Ukrajinská literatura"
          cardColor="#79A4E7"
          cardTextColor="#F4E2A3"
        />
        <SquareBlock
          title="O projektu"
          cardColor="#F3F3F3"
          cardTextColor="#3A6BA4"
        />
        <SquareBlock
          title="Články"
          cardColor="#F3F3F3"
          cardTextColor="#3A6BA4"
        />
      </TopSectionContainer>
    </>
  );
};

export default Home;
