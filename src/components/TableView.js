import React, { useEffect, useState } from "react";

import { ABBREV } from "../data/mappings";

function createData(shortcut, description) {
  return { shortcut, description };
}

const renderRows = (selectedCategory, data) => {
  return data
    .filter((item) => item.category === selectedCategory)
    .map((item) => {
      return createData(
        <>
          {item.hotkeys.map((key, index) => (
            <span key={`${index} - ${key[0]}`}>
              <kbd className="border p-2 rounded-md">{ABBREV[key] || key}</kbd>
              {index !== item.hotkeys.length - 1 && (
                <span>&nbsp; + &nbsp;</span>
              )}
            </span>
          ))}
        </>,
        `${item.description}`
      );
    });
};

const TableView = (props) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(renderRows(props.category, props.data));
  }, [props.category, props.data]);

  return (
    <div
      className="overflow-x-hidden bg-white rounded-lg shadow overflow-y-scroll relative md:overflow-x-visible dark:bg-gray-800"
      style={{ height: "768px" }}
    >
      <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
        <thead>
          <tr className="text-left">
            <th className="bg-primary sticky top-0 border-b border-gray-200 px-6 py-4 text-secondaryLight font-bold tracking-wider uppercase text-sm md:text-base dark:bg-gray-800 dark:border-gray-600">
              No.
            </th>
            <th className="bg-primary sticky top-0 border-b border-gray-200 px-6 py-4 text-secondaryLight font-bold tracking-wider uppercase text-sm md:text-base dark:bg-gray-800 dark:border-gray-600">
              Keyboard Shorcut
            </th>
            <th className="bg-primary sticky top-0 border-b border-gray-200 px-6 py-2 text-secondaryLight font-bold tracking-wider uppercase text-sm md:text-base  dark:bg-gray-800 dark:border-gray-600">
              Description
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray h-1/2 text-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:divide-gray-600">
          {rows.map((row, index) => (
            <tr className="">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="font-bold text-sm md:text-base">
                  {index + 1}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="font-bold text-sm md:text-base">
                  {row.shortcut}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="font-bold text-left text-sm md:text-base">
                  {row.description}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
