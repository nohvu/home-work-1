import React from "react";
import { tabsData } from "../data/tabsData";
import { TabCard } from "./TabCard";

export const FAQ: React.FC = () => {
  return (
    <div id="app">
      <div className="app-container">
        <h1 className="app-title">FAQ</h1>
        <div className="app-tabs">
          {tabsData.map((tab) => (
            <TabCard key={tab.id} id={tab.id} title={tab.title} description={tab.description} />
          ))}
        </div>
      </div>
    </div>
  );
};
