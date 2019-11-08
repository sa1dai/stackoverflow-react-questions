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

  private static getSortedQuestions(
    questions: Question[] | null,
    newQuestionsFirst: boolean
  ): Question[] {
    return _.orderBy(
      questions,
      ['creation_date'],
      [newQuestionsFirst ? 'desc' : 'asc']
    );
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
        const sortedQuestions = App.getSortedQuestions(
          questions,
          newQuestionsFirst
        );
        return this.setState({ questions: sortedQuestions });
      })
      .catch(() => this.setState({ error: 'Error occurred!' }));
  }

  private toggleSort = (): void => {
    const { questions, newQuestionsFirst } = this.state;
    this.setState({
      questions: App.getSortedQuestions(questions, !newQuestionsFirst),
      newQuestionsFirst: !newQuestionsFirst
    });
  };

  public render(): ReactNode {
    const { questions, error } = this.state;
    if (error) {
      return <div className="common-screen-center">{error}</div>;
    }
    if (!questions) {
      return <div className="common-screen-center">Loading...</div>;
    }
    const { newQuestionsFirst } = this.state;
    return (
      <>
        <button className="sort-button" onClick={this.toggleSort}>
          {newQuestionsFirst
            ? 'Sort: old questions first'
            : 'Sort: new questions first'}
        </button>
        <QuestionList questions={questions} />
      </>
    );
  }
}

export default App;
