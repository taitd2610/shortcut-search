import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

//Data and helpers
import { KEYMAPS, SYMBOLS } from "../data/mappings";
import {
  getDataFilteredByCategory,
  getRandomInt,
  searchForIncrementalMatch,
} from "../util/helpers";

//Components
import Key from "./Key";
import TableView from "./TableView";

const KeyboardView = (props) => {
  //State
  const [keysToDisplay, setKeysToDisplay] = useState([]);
  const [shortcutsToDisplay, setShortcutsToDisplay] = useState([]);

  //Refs
  const searchMatches = useRef(
    getDataFilteredByCategory(props.data, props.category)
  );

  useEffect(() => {
    //Reset all the things
    setKeysToDisplay([]);
    setShortcutsToDisplay([]);
    searchMatches.current = getDataFilteredByCategory(
      props.data,
      props.category
    );
  }, [props.category, props.osValue, props.data]);

  useEffect(() => {
    if (keysToDisplay.length > 0) {
      const lastKeyPressed = keysToDisplay[keysToDisplay.length - 1].keyEntered;

      //Search for a match as the user presses keys
      searchMatches.current = searchForIncrementalMatch(
        lastKeyPressed,
        keysToDisplay,
        searchMatches.current,
        props.osValue
      );

      setShortcutsToDisplay(searchMatches.current);
    }
  }, [keysToDisplay, props.osValue]);

  /* This method gets called when the keyDown event occurs and handles creating the new <Key /> component for
   * display and setting up the object structure to be searchable later on. */
  const handleKeyDown = useCallback(
    (event) => {
      if (!event.metaKey) event.preventDefault();

      // Setup <Key /> component to render the mac key to the DOM
      const symbol = props.osValue === "Mac" ? SYMBOLS[event.key] : null;
      const KeyComponent = (
        <Key
          key={getRandomInt()}
          name={KEYMAPS[props.osValue][event.key] || event.key}
          symbol={symbol}
        />
      );

      const newKeyInfo = {
        keyComponent: KeyComponent,
        keyEntered: KEYMAPS[props.osValue][event.key] || event.key,
      };

      setKeysToDisplay((prevState) =>
        prevState.length < 4 ? [...prevState, newKeyInfo] : prevState
      );
    },
    [props.osValue]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  //NOTE: Consider wrapping this in a useCallback so it can be used in the useEffect??
  const handleClearKeys = () => {
    //Reset all the things
    setKeysToDisplay([]);
    setShortcutsToDisplay([]);
    searchMatches.current = getDataFilteredByCategory(
      props.data,
      props.category
    );
  };

  return (
    <div>
      <div className="flex justify-center items-center mb-8 ml-2">
        {keysToDisplay.length > 0 && (
          <React.Fragment>
            {keysToDisplay.map((key) => {
              return key.keyComponent;
            })}
            <button
              className="p-2 bg-red-400 text-white rounded-md uppercase hover:bg-red-500"
              q
              onClick={handleClearKeys}
            >
              Clear Keys
            </button>
          </React.Fragment>
        )}
      </div>

      {keysToDisplay.length === 0 && (
        <div className="">
          <p className="text-lg border-b-2 px-2 overflow-hidden whitespace-nowrap">
            Press any key to begin a shortcut search 🔍️
          </p>
        </div>
      )}
      {shortcutsToDisplay.length === 0 && keysToDisplay.length > 0 && (
        <p className="text-lg text-red-600 text-center">
          🔍 No results found !!!
        </p>
      )}
      {shortcutsToDisplay.length > 0 && keysToDisplay.length > 0 && (
        <TableView category={props.category} data={shortcutsToDisplay} />
      )}
    </div>
  );
};

KeyboardView.propTypes = {
  category: PropTypes.string.isRequired,
  osValue: PropTypes.string.isRequired,
};

export default KeyboardView;
