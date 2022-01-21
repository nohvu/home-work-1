import React from "react";
import { floor, random } from "mathjs";
import "./App.scss";

import { EmptyBlock } from "./components/EmptyBlock";
import { Phrase } from "./components/Phrase";

const adjectivesArr: Array<string> = [
  "абсолютный",
  "адский",
  "азартный",
  "активный",
  "ангельский",
  "астрономический",
  "баснословный",
  "безбожный",
  "безбрежный",
  "безвозвратный",
  "безграничный",
  "бездонный",
  "бездушный",
  "безжалостный",
  "замечательно",
  "замечательный",
  "записной",
  "запредельный",
  "заядлый",
  "звериный",
  "зверский",
  "зеленый",
  "злой",
  "злостный",
  "значительный",
  "неоспоримый",
  "неотразимый",
  "неоценимый",
  "непередаваемый",
];
const nounsArr: Array<string> = [
  "лгун",
  "день",
  "конь",
  "олень",
  "человек",
  "программист",
  "ребёнок",
  "конец",
  "город",
  "дурак",
];

function App() {
  const [arr, setArray] = React.useState<Array<string>>([]);

  const addPhrase = () => {
    let adj1 = adjectivesArr[floor(random() * adjectivesArr.length)];
    let adj2 = adjectivesArr[floor(random() * adjectivesArr.length)];
    let noun = nounsArr[floor(random() * nounsArr.length)];
    let text = adj1 + " " + adj2 + " " + noun;

    setArray((prev) => [...prev, text]); // в задании предлагают добавлять в начало([text, ...prev]) , но вроде так разумнее.
  };
  const removePhrase = () => {
    setArray([]);
  };
  // ниже arr.map обернут в div className="list" чтобы работал скролл (в предоставленном нам виде не будет работать)
  return (
    <div className="wrapper">
      {arr.length ? (
        <div className="list">
          {arr.map((item) => (
            <Phrase key={item} text={item} />
          ))}
        </div>
      ) : (
        <EmptyBlock />
      )}
      <button onClick={addPhrase} className="btn btn_generate">
        Сгенерировать
      </button>
      <button onClick={removePhrase} className="btn btn_clear">
        Очистить
      </button>
    </div>
  );
}
export default App;
