"use client";
import { DiscussionEmbed } from "disqus-react";
const Disqus = ({
  shortname,
  chapter_id,
  title,
}: {
  shortname: string;
  chapter_id: string;
  title: string;
}) => {
  return (
    <DiscussionEmbed
      shortname={`${process.env.NEXT_PUBLIC_DISQUS_SHORTNAME}`}
      config={{
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/watch/chapter/${chapter_id}/`,
        identifier: `chapter/${chapter_id}`,
        title: `${title}`,
        language: "id-ID",
      }}
    />
  );
};

export default Disqus;
