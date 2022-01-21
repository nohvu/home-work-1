import React from "react";

interface IPhrase {
  text: string;
}

export const Phrase: React.FC<IPhrase> = (props) => {
  // div className="list" перенесен в App для корректного отображения
  return (
    <div className="block">
      <h3>{props.text}</h3>
    </div>
  );
};
