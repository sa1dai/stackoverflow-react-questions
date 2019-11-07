export interface FilteredQuestions {
  items: FilteredQuestion[];
}

interface FilteredQuestion {
  owner: FilteredQuestionOwner;
  creation_date: number;
  link: string;
  title: string;
}

interface FilteredQuestionOwner {
  profile_image: string;
  display_name: string;
}
