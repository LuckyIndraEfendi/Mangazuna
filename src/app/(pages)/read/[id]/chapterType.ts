export interface chapterType {
  status: string;
  title: string;
  data: string[];
  has_next: { has_next_link: null | string; is_next_link: boolean };
  has_prev: {
    has_prev_link: null | string;
    is_prev_link: boolean;
  };
}
