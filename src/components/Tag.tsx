import { useTranslations } from 'next-intl';
import { TagType } from '@/constants';

interface TagProps {
  tag: TagType;
  selected: TagType | null;
  onSelect: (tag: TagType | null) => void;
 }
 
 const Tag = ({ tag, selected, onSelect }: TagProps) => (
  <button
    className={`${tag} tag ${tag === selected ? 'active' : ''}`}
    onClick={() => onSelect(tag === selected ? null : tag)}
  >
    {tag}
  </button>
 );

export default Tag;
