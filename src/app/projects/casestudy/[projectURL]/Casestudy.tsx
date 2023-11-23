import Floof from "./Floof";
import Knotbook from "./Knotbook";

const Casestudy = ({ projectName }: { projectName?: string }) => {
  if (projectName === "Floof") {
    return (
      <Floof />
    );
  } else if (projectName === "Knotbook") {
    return (
      <Knotbook/>
    );
  }

  return (
    <div></div>
  );
};

export default Casestudy;
