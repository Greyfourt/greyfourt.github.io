import Icon from "./Icons";
import { Tags } from "./ProjectsList";

interface TagProps {
  tag: string;
  key?: number | string;
  currentTag: string;
  setCurrentTag: (tag: string) => void;
}

const Tag = ({ tag, key, currentTag, setCurrentTag }: TagProps) => {

  return (
    <button
      className={
        `${tag}` + " tag" + ((tag === currentTag) ? " active" : "")
      }
      key={key}
      onClick={() => {
        setCurrentTag(tag);
      }}
    >
      <div className="icon">
        <Icon type="round" />
      </div>

      <p>{tag}</p>
    </button>
  );
};

export default Tag;
