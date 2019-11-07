import React, { ReactNode } from 'react';
import './App.css';
import { Questions } from './types';
import StackoverflowApiService from './StackoverflowApiService';

interface AppState {
  questions: Questions | null;
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
      .then(questions => this.setState({ questions }))
      .catch(() => this.setState({ error: 'Error occurred!' }));
  }

  public render(): ReactNode {
    const { questions, error } = this.state;
    if (error) {
      return <div className="screenCenter">{error}</div>;
    }
    return (
      <>
        {!questions && <div className="screenCenter">Loading...</div>}
        {questions && <div className="container">Hello</div>}
      </>
    );
  }
}

export default App;
