import React, { useState } from "react";

import GithubLogo from "./images/GitHub-Mark-Light.png";
import KeyboardShorcut from "./images/keyboard.png";

import "./App.css";
import OptionBar from "./components/OptionBar";
import TableView from "./components/TableView";

//Data
import macShortcutsData from "./data/macShortcuts";
import windowsShortcutsData from "./data/windowsShortcuts";

function App() {
  const [view, setView] = useState("table");
  const [category, setCategory] = useState("Native");
  const [osValue, setOSValue] = useState("Windows");

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="flex justify-end w-full">
        <div className="w-0 h-0 border-t-8 border-black" />
        <a
          href="https://github.com/Cool-Runningz/keyboard-shortcut-search"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GithubLogo} alt="Github Logo" style={{ width: "3rem" }} />
        </a>
      </div>

      <div className="flex items-end mb-8">
        <img
          className="w-12 mr-2"
          src={KeyboardShorcut}
          alt="Keyboard Shortcut Logo"
        />
        <h1 className="text-4xl font-extrabold text-primaryDark">
          ️Shortcut Search
        </h1>
      </div>

      <p className="p-4 mb-8 text-center italic bg-gray-300 border-l-8 border-gray-500 text-primary">
        A collection of commonly used keyboard shortcuts to help boost
        productivity ✅
      </p>

      <div className="w-1/2 mb-6">
        <OptionBar
          osValue={osValue}
          currentView={view}
          onViewChange={setView}
          onOSChange={setOSValue}
          onCategoryChange={setCategory}
        />
      </div>

      <h2 className="text-2xl font-bold text-primary mb-8">
        ️ {osValue} {category} Shortcuts
      </h2>

      {view === "table" ? (
        <TableView
          category={category}
          data={osValue === "Windows" ? windowsShortcutsData : macShortcutsData}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
