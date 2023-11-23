import Icon from "./Icons";
import { Tags } from "./ProjectsList";

interface TagProps {
  tag: string;
  index?: number | string;
  currentTag?: string;
  setCurrentTag: (tag: string) => void;
}

const Tag = ({ tag, index, currentTag, setCurrentTag }: TagProps) => {

  return (
    <button
      className={
        `${tag.replace(" ","")}` + " tag" + ((tag === currentTag) ? " active" : "")
      }
      key={index}
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
