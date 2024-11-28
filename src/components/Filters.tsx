import { useTranslations } from "next-intl";
import Tag from "@/components/Tag";
import { TagType } from '@/constants';
import { Dispatch, SetStateAction } from 'react';


type FiltersProps = {
  selected: TagType | null;
  onSelect: Dispatch<SetStateAction<TagType | null>>;
};


const Filters = ({ selected, onSelect }: FiltersProps) => {
  const t = useTranslations();
 
  return (
    <div className="filters">
      {Object.entries(t('global.tags')).map(([key, label]) => (
        <Tag
        key={key}
        tag={key as TagType}
        selected={selected}
        onSelect={onSelect}
      />
      ))}
    </div>
  );
 }

export default Filters;
