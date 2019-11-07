export interface Question {
  owner: QuestionOwner;
  is_answered: boolean;
  creation_date: number;
  link: string;
  title: string;
}

interface QuestionOwner {
  reputation: number;
  profile_image: string;
  display_name: string;
}
