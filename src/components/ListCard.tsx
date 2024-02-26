import React from 'react';

interface ListProps {
  content: string[];
}

const ListCard: React.FC<ListProps> = ({ content }) => {
  return (
    <ul className="list-disc space-y-2 md:px-4 px-10 py-2 text-[#6B7280]">
      {content.map((content, index) => (
        <li key={index}>{content}</li>
      ))}
    </ul>
  );
};

export default ListCard;
