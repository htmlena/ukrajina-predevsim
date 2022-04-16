import SquareBlock from '../src/components/SquareBlock/SquareBlock';
import styled from 'styled-components';
import { mq } from '../src/utils/breakpoints';
import { PreviewSection } from '../src/components/PreviewSection/PreviewSection';

const Home = () => {
  const TopSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1.2rem;

    ${mq.mediumUp.css`
      flex-direction: row;
 `}

    ${mq.largeUp.css`
  // flex-direction: row;
    padding: 0 3rem;
 `}

    ${mq.xlarge.css`
      padding: 0;
 `}
  `;

  const FirstColumnContainer = styled.section`
    display: flex;
  `;

  const SecondColumnContainer = styled.section`
    display: flex;
    flex-direction: column;
  `;

  const SubsectionOne = styled.section``;
  const SubsectionTwo = styled.section``;

  return (
    <>
      <TopSectionContainer>
        <FirstColumnContainer>
          <SquareBlock
            title="Ukrajinské umění"
            shortDescription="„Ukrajinské umění bylo vždy víc aktivistické, občanské,
                promlouvalo o tom, co se kolem nás děje.“"
            cardColor="#fec9e5"
            cardTextColor="#0057b8"
          />
        </FirstColumnContainer>
        <SecondColumnContainer>
          <SubsectionOne>
            <PreviewSection title={'Článek'} />
            <PreviewSection title={'Článek'} />
          </SubsectionOne>
          <SubsectionTwo></SubsectionTwo>
        </SecondColumnContainer>
        {/* <SquareBlock
          title="Ukrajinský jazyk"
          cardColor="#ffd700"
          cardTextColor="#A74D4D"
        />
        <SquareBlock
          title="Ukrajinská hudba"
          cardColor="#CBA5FC"
          cardTextColor="#F3F3F3"
        />
        <SquareBlock
          title="Ukrajinská literatura"
          cardColor="#0057b8"
          cardTextColor="#F4E2A3"
        />
        <SquareBlock
          title="O projektu"
          cardColor="#F3F3F3"
          cardTextColor="#0057b8"
        />
        <SquareBlock
          title="Články"
          cardColor="#F3F3F3"
          cardTextColor="#0057b8"
        /> */}
      </TopSectionContainer>
    </>
  );
};

export default Home;
