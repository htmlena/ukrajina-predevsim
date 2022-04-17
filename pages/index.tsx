import SquareBlock from '../src/components/SquareBlock/SquareBlock';
import styled from 'styled-components';
import { mq } from '../src/utils/breakpoints';
import { PreviewSection } from '../src/components/PreviewSection/PreviewSection';
import { ArticlePreview } from '../src/components/ArticlePreview.tsx/ArticlePreview';

const Home = () => {
  const TopSectionContainer = styled.div`
    // display: flex;
    // flex-direction: column;
    display: grid;
    grid-template-areas:
      'firstColumn'
      'secondColumn'
      'thirdColumn';
    // padding: 0 1.2rem;
    ${mq.mediumUp.css`
      flex-direction: row;
      grid-template-areas: 'firstColumn secondColumn thirdColumn';
 `}
    ${mq.largeUp.css`
  // flex-direction: row;
    padding: 0 3rem;
 `}
      ${mq.xlarge.css`
      padding: 0;
 `};
  `;

  const FirstColumnContainer = styled.section`
    display: flex;
    grid-area: firstColumn;
    ${mq.largeUp.css`
      flex-basis: 40%;
 `}
  `;

  const SecondColumnContainer = styled.section`
    display: flex;
    flex-direction: column;
    grid-area: secondColumn;
    justify-content: space-around;
    ${mq.largeUp.css`
      flex-direction: row;
      flex-basis: 50%;
 `}
  `;

  const ThirdColumnContainer = styled.section`
    grid-area: thirdColumn;
  `;

  const SubsectionOne = styled.section`
    ${mq.mediumUp.css`
      flex-basis: 40%;
 `}
  `;
  const SubsectionTwo = styled.section`
    border: 1px solid #e1e1e1;
    ${mq.mediumUp.css`
      flex-basis: 40%;
 `}
  `;

  return (
    <>
      <TopSectionContainer>
        <FirstColumnContainer>
          <SquareBlock
            title="Ukrajinské umění"
            shortDescription="„Ukrajinské umění bylo vždy víc aktivistické, občanské,
                promlouvalo o tom, co se kolem nás děje.“"
            cardColor="#ffd700"
            cardTextColor="#0057b8"
          />
        </FirstColumnContainer>
        <SecondColumnContainer>
          <SubsectionOne>
            <PreviewSection
              title={'Článek'}
              image={'artur-zhadan-wv7GyOu66r8-unsplash.webp'}
            />
            <PreviewSection
              title={'Článek'}
              image={'volodymyr-tokar-W6eVy5wy8-M-unsplash.webp'}
            />
          </SubsectionOne>
        </SecondColumnContainer>
        <ThirdColumnContainer>
          <SubsectionTwo>
            <ArticlePreview
              date={'1. září'}
              title={
                'Plošná pomoc lidem inflaci jedině zhorší, řekla ekonomka, která radí Fialovi'
              }
            />
            <ArticlePreview
              date={'11. srpna'}
              title={
                'Třetí světová válka začala, oznámila moderátorka ruské televize'
              }
            />
            <ArticlePreview
              date={'21. srpna'}
              title={
                'Viníci dopravních nehod podle továrních značek 2021: Patnácti největším hříšníkům kraluje Iveco'
              }
            />
            {/* <ArticlePreview
              date={'3. července'}
              title={
                'Žaludek na vodě, motání hlavy a slabost. Nejlepší pomocníci proti nevolnosti, které najdete ve spíži'
              }
            />
            <ArticlePreview
              date={'3. června'}
              title={
                'Staré džíny nevyhazovat! Vyrobte si z nich prostírání, zástěru nebo kabelku '
              }
            /> */}
          </SubsectionTwo>
        </ThirdColumnContainer>
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
