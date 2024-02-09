export type detailsDataProps = {
  cara_baca: string;
  chapter_list: {
    chapter_list: Array<{
      chapter_title: string;
      chapter_link: string;
      chapter_update: string;
    }>;
  };
  dilihat: string;
  genre: string;
  images: string;
  jenis_komik: string;
  komik_lainnya: object;
  konsep_cerita: string;
  pengarang: string;
  rating: string;
  rilis: string;
  status: string;
  synopsis: string;
  type: string;
  umur_pembaca: string;
  update_terakhir: string;
};
