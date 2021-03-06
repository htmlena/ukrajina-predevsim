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
    padding: 0 1.2rem;
    grid-row-gap: 2rem;

    ${mq.mediumUp.css`
      flex-direction: row;
      grid-template-areas: 'firstColumn firstColumn'
      'secondColumn thirdColumn';
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 2rem;
 `}
    ${mq.largeUp.css`
  // flex-direction: row;
    padding: 0 3rem;
    grid-template-areas: 'firstColumn secondColumn thirdColumn';
    grid-template-columns: 2fr 1fr 1fr;
 `}
      ${mq.xlarge.css`
      padding: 0;
 `};
  `;

  const FirstColumnContainer = styled.section`
    display: flex;
    grid-area: firstColumn;
  `;

  const SecondColumnContainer = styled.section`
    display: flex;
    flex-direction: column;
    grid-area: secondColumn;
    justify-content: space-around;
    ${mq.largeUp.css`
      flex-direction: row;
 `}
  `;

  const ThirdColumnContainer = styled.section`
    display: flex;
    grid-area: thirdColumn;
  `;

  const SubsectionOne = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${mq.mediumUp.css`
      // flex-basis: 40%;
 `}
  `;
  const SubsectionTwo = styled.div`
    border: 1px solid #e1e1e1;
    ${mq.mediumUp.css`
      // flex-basis: 40%;
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
            <div>
              <PreviewSection
                title={
                  'Ukrajinské umění bylo vždy víc aktivistické Ukrajinské umění bylo vždy víc aktivistické'
                }
                image={'artur-zhadan-wv7GyOu66r8-unsplash.webp'}
              />
            </div>
            <div>
              <PreviewSection
                title={
                  'Plošná pomoc lidem inflaci jedině zhorší, řekla ekonomka, která radí Fialovi'
                }
                image={'volodymyr-tokar-W6eVy5wy8-M-unsplash.webp'}
              />
            </div>
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
            <ArticlePreview
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
            />
            <ArticlePreview
              date={'3. června'}
              title={
                'Staré džíny nevyhazovat! Vyrobte si z nich prostírání, zástěru nebo kabelku '
              }
            />
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
