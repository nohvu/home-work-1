import React from "react";
import { ITabs } from "../interfaces/InterfaceTab";

export const TabCard: React.FC<ITabs> = (props) => {
  const [visibility, setVisibility] = React.useState<boolean>(false);
  const [activeID, setActiveID] = React.useState<number>();

  const setID = (id: number) => {
    setActiveID((prev) => (prev = id));
    setVisibility((prev) => !prev);
  };

  return (
    <div className={activeID === props.id && visibility ? "tab active" : "tab"}>
      <input id="tab-one" type="checkbox" name="tabs" />
      <label onClick={() => setID(props.id)} htmlFor="tab-one">
        {props.title}
      </label>
      <div className="tab-content">
        <p>{props.description}</p>
      </div>
    </div>
  );
};
