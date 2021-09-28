import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const options = [
  { name: "Native" },
  { name: "Browser" },
  { name: "Document" },
  { name: "VSCode" },
  { name: "Photoshop" },
  { name: "Adobe After Effect" },
];

const OptionBar = (props) => {
  const [selected, setSelected] = useState(options[0]);

  const handleOptionChange = (option) => {
    setSelected(option);
    props.onCategoryChange(option.name);
  };

  return (
    <Fragment>
      <div className="flex space-x-4 mb-6 justify-center">
        <p
          className={`p-2 text-primaryDark ${
            props.osValue === "Windows"
              ? "border-b-2 border-primary font-bold"
              : ""
          } inline-flex items-center cursor-pointer `}
          onClick={() => {
            props.onOSChange("Windows");
          }}
        >
          Windows
        </p>

        <p
          className={`p-2 text-primaryDark ${
            props.osValue === "MacOS"
              ? "border-b-2 border-primary font-bold"
              : ""
          } border-primary inline-flex items-center cursor-pointer`}
          onClick={() => {
            props.onOSChange("MacOS");
          }}
        >
          MacOS
        </p>
      </div>
      {/* List option and mode view */}
      <div className="flex justify-between items-center mb-6 mt-8">
        <div className="w-72">
          <Listbox value={selected} onChange={handleOptionChange}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                <span className="block truncate text-primaryDark font-bold">
                  {selected.name}
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="w-5 h-5 text-primary"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
                  {options.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `${
                          active
                            ? "text-primaryDark bg-secondaryLight"
                            : "text-primary"
                        }
                        cursor-default select-none relative py-2 pl-10 pr-4`
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`${
                              selected ? "font-bold" : "font-normal"
                            } block truncate`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span
                              className={`${
                                active ? "text-amber-600" : "text-amber-600"
                              }
                              absolute inset-y-0 left-0 flex items-center pl-3`}
                            >
                              <CheckIcon
                                className="w-5 h-5 text-primary"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        <button
          className="bg-primary p-2 rounded-md text-secondaryLight inline-flex items-center hover:bg-primaryDark"
          onClick={() =>
            props.onViewChange(
              props.currentView === "table" ? "keyboard" : "table"
            )
          }
        >
          {props.currentView === "table" ? (
            <span>Table</span>
          ) : (
            <span>Keyboard</span>
          )}
        </button>
      </div>
    </Fragment>
  );
};

export default OptionBar;
