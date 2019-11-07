import React, { ReactNode } from 'react';
import './App.css';
import { Questions } from './types';

interface AppState {
  questions: Questions | null;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = { questions: null };
  }

  public render(): ReactNode {
    return (
      <>
        {!this.state.questions && (
          <div className="screenCenter">Loading...</div>
        )}
        {this.state.questions && <div className="container">Hello</div>}
      </>
    );
  }
}

export default App;
