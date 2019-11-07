import _ from 'lodash';
import { Question } from 'src/types';

interface ApiQuestionsData {
  items: Question[];
}

export default class StackoverflowApiService {
  _apiBase =
    'https://api.stackexchange.com/2.2/search?intitle=react&site=stackoverflow';

  getReactQuestions = async (): Promise<Question[]> => {
    const res = await fetch(`${this._apiBase}`);
    if (!res.ok) {
      throw new Error(
        `Could not fetch react questions` + `, received ${res.status}`
      );
    }
    const apiQuestionsData: ApiQuestionsData = await res.json();
    const questions = apiQuestionsData.items;
    // фильтр вопросов согласно заданию
    return _.filter(
      questions,
      question => question.is_answered && question.owner.reputation >= 50
    );
  };
}
