import React, { ReactNode } from 'react';
import QuestionList from 'src/components/QuestionList';
import { Question } from 'src/types';
import StackoverflowApiService from 'src/services/StackoverflowApiService';
import 'src/components/common.css';
import _ from 'lodash';

interface AppState {
  questions: Question[] | null;
  error: string | null;
  newQuestionsFirst: boolean;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      questions: null,
      error: null,
      newQuestionsFirst: true
    };
  }

  async componentDidMount(): Promise<void> {
    const service = new StackoverflowApiService();
    service
      .getReactQuestions()
      .then(questions => {
        if (!Array.isArray(questions)) {
          throw new Error('Returned questions is not an array');
        }
        const { newQuestionsFirst } = this.state;
        const sortedQuestions = _.orderBy(
          questions,
          ['creation_date'],
          [newQuestionsFirst ? 'desc' : 'asc']
        );
        return this.setState({ questions: sortedQuestions });
      })
      .catch(() => this.setState({ error: 'Error occurred!' }));
  }

  public render(): ReactNode {
    const { questions, error } = this.state;
    if (error) {
      return <div className="common-screen-center">{error}</div>;
    }
    if (!questions) {
      return <div className="common-screen-center">Loading...</div>;
    }
    return (
      <>
        <button>hello</button>
        <QuestionList questions={questions} />
      </>
    );
  }
}

export default App;
