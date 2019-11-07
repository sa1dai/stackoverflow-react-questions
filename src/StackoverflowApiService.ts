import { FilteredQuestions } from './types';

interface Questions {
  items: Question[];
}

interface Question {
  owner: QuestionOwner;
  creation_date: number;
  link: string;
  title: string;
}

interface QuestionOwner {
  profile_image: string;
  display_name: string;
}

const filterQuestions = (questions: Questions): FilteredQuestions => {
  return questions;
};

export default class StackoverflowApiService {
  _apiBase =
    'https://api.stackexchange.com/2.2/search?intitle=react&site=stackoverflow';

  getReactQuestions = async (): Promise<FilteredQuestions> => {
    const res = await fetch(`${this._apiBase}`);
    if (!res.ok) {
      throw new Error(
        `Could not fetch react questions` + `, received ${res.status}`
      );
    }
    const questions: Questions = await res.json();
    return filterQuestions(questions);
  };
}
