import { useTranslations } from "next-intl";
import Tag from "@/components/Tag";
import { TagType } from '@/types';
import { Dispatch, SetStateAction } from 'react';

interface FiltersProps {
  selected: TagType | null;
  onSelect: Dispatch<SetStateAction<TagType | null>>;
}

export const Filters = ({ selected, onSelect }: FiltersProps) => {
  const t = useTranslations();
  const tags: TagType[] = ['logo', 'website', 'mobileApp', 'webApp', 'graphics'];

  return (
    <div className="filters">
      <Tag
        key="all"
        tag="all"
        selected={selected}
        onSelect={() => onSelect(null)}
      />
      {tags.map((tag) => (
        <Tag
          key={tag}
          tag={tag}
          selected={selected}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
export default Filters;
