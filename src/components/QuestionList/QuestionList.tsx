import React, { ReactElement } from 'react';
import './QuestionList.css';
import 'src/components/common.css';
import { Question } from 'src/types';

interface QuestionListProps {
  questions: Question[];
}

interface AvatarProps {
  backgroundImageUrl: string;
}

const Avatar = (props: AvatarProps): ReactElement | null => {
  const { backgroundImageUrl } = props;
  const isGravatar = (url: string): boolean => url.includes('www.gravatar.com');
  if (isGravatar(backgroundImageUrl)) {
    return null;
  }
  return (
    <span
      style={{
        height: '38px',
        width: '38px',
        display: 'inline-block',
        backgroundImage: backgroundImageUrl,
        backgroundSize: 'cover',
        borderRadius: '50%'
      }}
    />
  );
};

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
        return (
          <li className="QuestionList-li" key={question.question_id}>
            <Avatar
              backgroundImageUrl={`url(${question.owner.profile_image})`}
            />
            {question.title}
          </li>
        );
      })}
    </ul>
  );
};

export default QuestionList;
