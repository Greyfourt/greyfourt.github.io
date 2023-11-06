import { useState } from "react";
import ProjectsList, { TagsList } from "./ProjectsList";
import Tag from "./Tag";

const Filters = () => {
  const Projects = ProjectsList;
  const [currentTag, setCurrentTag] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="filtersContainer">
      <p className="filterTitle">Filter</p>
      <div className="filters">
        <button
          onClick={() => {
            setCurrentTag(""), setIsSelected(false);
          }}
        >
          Reset
        </button>

        {TagsList.map((TagsList, index) => {
          return (
            <div className={TagsList.tag} key={index}>
              <Tag tag={TagsList.tag} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
