import React, { ReactNode } from 'react';
import QuestionList from 'src/QuestionList';
import { Question } from 'src/types';
import StackoverflowApiService from 'src/StackoverflowApiService';
import 'src/common.css';

interface AppState {
  questions: Question[] | null;
  error: string | null;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = { questions: null, error: null };
  }

  async componentDidMount(): Promise<void> {
    const service = new StackoverflowApiService();
    service
      .getReactQuestions()
      .then(questions => {
        if (!Array.isArray(questions)) {
          throw new Error('Returned questions is not an array');
        }
        return this.setState({ questions });
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
    return <QuestionList questions={questions} />;
  }
}

export default App;
