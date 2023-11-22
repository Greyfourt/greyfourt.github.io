'use client'

import { useState } from "react";
import Icon from "./Icons";
import { TagsList } from "./ProjectsList";

interface TagProps {
  tag: string;
}

const Tag = ({ tag }: TagProps) => {
  const [isSelected, setIsSelected] = useState("false");
  const [currentTag, setCurrentTag] = useState("");

  return (
    <>
        <div
          className={"tag" + (isSelected === "true" ? " active" : "")}
          onClick={() => {
            setCurrentTag(tag), setIsSelected("true");
          }}
        >
          <div className="icon">
            <Icon type="round" />
          </div>

          <p>{tag}</p>
        </div>
    </>
  );
};

export default Tag;
