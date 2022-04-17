import { FC } from 'react';
import styled from 'styled-components';

const ArticlePreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const ArticlePreviewDate = styled.div`
  color: #949494;
  padding-bottom: 1rem;
`;

const ArticlePreviewTitle = styled.div`
  font-weight: 600;
  border-bottom: 1px solid #e1e1e1;
  padding-bottom: 1rem;
`;

type ArticlePreviewProps = {
  title: string;
  date: string;
};

export const ArticlePreview: FC<ArticlePreviewProps> = ({ title, date }) => {
  return (
    <ArticlePreviewContainer>
      <ArticlePreviewDate>{date}</ArticlePreviewDate>
      <ArticlePreviewTitle>{title}</ArticlePreviewTitle>
    </ArticlePreviewContainer>
  );
};
