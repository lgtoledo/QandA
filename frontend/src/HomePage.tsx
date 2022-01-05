import React from 'react';
import { QuestionList } from './QuestionList';
import { getUnansweredQuestions } from './QuestionsData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';

export const HomePage = () => {
  React.useEffect(() => {
    console.log('first rendered');
  }, []);
  return (
    <Page>
      <div>
        <PageTitle>Unanswered Questions</PageTitle>
        <button>Ask a Question</button>
      </div>
      {/* <QuestionList data={getUnansweredQuestions()} /> */}
    </Page>
  );
};
