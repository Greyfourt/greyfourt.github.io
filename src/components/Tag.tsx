import { useTranslations } from 'next-intl';
import { TagType } from '@/types';

interface TagProps {
  tag: TagType;
  selected: TagType | null;
  onSelect: (tag: TagType | null) => void;
}

const Tag = ({ tag, selected, onSelect }: TagProps) => {
  const t = useTranslations('tags');
  
  return (
    <button
      className={`tag ${tag === selected ? 'active' : ''}`}
      onClick={() => onSelect(tag === selected ? null : tag)}
    >
      {t(`${tag}`)}
    </button>
  );
}

export default Tag;
