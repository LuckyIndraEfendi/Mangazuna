export type detailsDataProps = {
  status: string;
  data: {
    title: string;
    banner: string;
    type: string;
    status: string;
    rating: string;
    description: string;
    genres: string[];
    published: string;
    author: string;
    total_chapter: string;
    bookmark_users: string;
    chapter_list: [
      {
        chapter_title: string;
        chapter_slug: string;
        chapter_release: string;
      }
    ];
  };
};
