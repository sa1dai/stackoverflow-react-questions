// Здесь хранятся типы, использующиеся более чем в одном файле

export interface Question {
  question_id: number; // нужен для key в tsx
  owner: QuestionOwner;
  is_answered: boolean;
  creation_date: number;
  link: string;
  title: string;
}

interface QuestionOwner {
  reputation: number;
  profile_image: string;
}
