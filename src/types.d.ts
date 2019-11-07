export interface Questions {
  items: Question[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}

interface Question {
  tags: string[];
  owner: QuestionOwner;
  is_answered: boolean;
  view_count: number;
  answer_count: number;
  score: number;
  last_activity_date: number;
  creation_date: number;
  last_edit_date: number;
  question_id: number;
  link: string;
  title: string;
}

interface QuestionOwner {
  reputation: number;
  user_id: number;
  user_type: string;
  profile_image: string;
  display_name: string;
  link: string;
}
