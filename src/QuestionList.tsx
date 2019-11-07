import React, { ReactElement } from 'react';
import './QuestionList.css';
import './common.css';
import { Question } from './types';

interface QuestionListProps {
  questions: Question[];
}

const QuestionList = (props: QuestionListProps): ReactElement | null => {
  const { questions } = props;
  if (!Array.isArray(questions)) {
    return null;
  }
  if (questions.length === 0) {
    return (
      <div className="common-screen-center">
        There is no react questions that has an answer and the question owner
        has reputation not less 50
      </div>
    );
  }
  return (
    <ul className="QuestionList-ul">
      {questions.map(question => {
        return <li key={question.question_id}>{question.title}</li>;
      })}
    </ul>
  );
};

export default QuestionList;
