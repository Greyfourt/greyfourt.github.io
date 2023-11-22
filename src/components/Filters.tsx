import { useState } from "react";
import { Tags } from "./ProjectsList";
import Tag from "./Tag";
import Icon from "./Icons";

const Filters = ({
  currentTag,
  setCurrentTag,
}: {
  currentTag: string;
  setCurrentTag: (tag: string) => void;
}) => {
  // const [currentTag, setCurrentTag] = useState("");
  // const [isSelected, setIsSelected] = useState("false");

  return (
    <div className="filtersContainer">
      <div className="filters">
        {Tags.map((tag, index) => {
          return (
            <Tag
              tag={tag.tag}
              key={index}
              currentTag={currentTag}
              setCurrentTag={setCurrentTag}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
