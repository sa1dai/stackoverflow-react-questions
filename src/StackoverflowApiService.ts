import { Questions } from './types';

export default class StackoverflowApiService {
  _apiBase =
    'https://api.stackexchange.com/2.2/search?intitle=react&site=stackoverflow';

  getReactQuestions = async (): Promise<Questions> => {
    const res = await fetch(`${this._apiBase}`);

    if (!res.ok) {
      throw new Error(
        `Could not fetch react questions` + `, received ${res.status}`
      );
    }

    return await res.json();
  };
}
