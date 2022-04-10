import {
  HeaderContainer,
  Title,
  Subtitle,
  ContentContainer,
  Paragraph,
} from './ArticleContentStyles';

const ArticleContent = () => {
  return (
    <>
      <HeaderContainer>
        <Title>Ukrajinská literatura má tisíciletou historii</Title>
        <Subtitle>
          Významnou památkou z těch dob je letopis „Pověst minulých let.
        </Subtitle>
      </HeaderContainer>
      <ContentContainer>
        {/* placeholder */}
        <Paragraph>
          Vítr skoro nefouká a tak by se na první pohled mohlo zdát, že se
          balónky snad vůbec nepohybují. Jenom tak klidně levitují ve vzduchu.
          Jelikož slunce jasně září a na obloze byste od východu k západu
          hledali mráček marně, balónky působí jako jakási fata morgána
          uprostřed pouště. Zkrátka široko daleko nikde nic, jen zelenkavá
          tráva, jasně modrá obloha a tři křiklavě barevné pouťové balónky,
          které se téměř nepozorovatelně pohupují ani ne moc vysoko, ani moc
          nízko nad zemí. Kdyby pod balónky nebyla sytě zelenkavá tráva, ale
          třeba suchá silnice či beton, možná by bylo vidět jejich barevné stíny
          - to jak přes poloprůsvitné barevné balónky prochází ostré sluneční
          paprsky.
        </Paragraph>
        <Paragraph>
          Jenže kvůli všudy přítomné trávě jsou stíny balónků sotva vidět, natož
          aby šlo rozeznat, jakou barvu tyto stíny mají. Uvidět tak balónky
          náhodný kolemjdoucí, jistě by si pomyslel, že už tu takhle poletují
          snad tisíc let. Stále si víceméně drží výšku a ani do stran se příliš
          nepohybují. Proti slunci to vypadá, že se slunce pohybuje k západu
          rychleji než balónky, a možná to tak skutečně je. Nejeden filozof by
          mohl tvrdit, že balónky se sluncem závodí, ale fyzikové by to jistě
          vyvrátili. Z fyzikálního pohledu totiž balónky působí zcela
          nezajímavě.
        </Paragraph>
      </ContentContainer>
    </>
  );
};

export default ArticleContent;
